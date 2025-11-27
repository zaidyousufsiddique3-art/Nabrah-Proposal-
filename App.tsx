import React, { useState, useRef } from 'react';
import { Background } from './components/Background';
import { SlideRenderer } from './components/SlideRenderer';
import { LogoUploader } from './components/LogoUploader';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Total slides based on requirement
const TOTAL_SLIDES = 15;

// TalentlyX Logo - Using uploaded logo with transparent background
const DEFAULT_LOGO = "/talentlyx-logo.png";

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoUrl, setLogoUrl] = useState<string | null>(DEFAULT_LOGO);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  // We use this ref to mount slides off-screen for PDF capture
  const printRef = useRef<HTMLDivElement>(null);

  // Touch gesture support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  // Touch handlers for swipe navigation
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const handleExportPDF = async () => {
    if (!printRef.current) return;
    setIsExporting(true);
    setExportProgress(0);

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1920, 1080] // Standard 16:9 1080p
    });

    try {
      const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => i);
      const container = document.getElementById('pdf-generator-container');
      if (!container) throw new Error("Print container not found");

      // Temporarily make it visible but absolute positioned off-screen to ensure layout is correct
      container.style.display = 'block';

      const slideElements = container.querySelectorAll('.print-slide');

      for (let i = 0; i < slideElements.length; i++) {
        const element = slideElements[i] as HTMLElement;

        // Wait for images/fonts if needed (basic delay)
        await new Promise(resolve => setTimeout(resolve, 100));

        const canvas = await html2canvas(element, {
          scale: 2, // High res
          useCORS: true,
          backgroundColor: '#000000',
          logging: false
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.9);

        if (i > 0) pdf.addPage([1920, 1080]);
        pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);

        setExportProgress(Math.round(((i + 1) / TOTAL_SLIDES) * 100));
      }

      pdf.save('Nabrah-Proposal-TalentlyX.pdf');
      container.style.display = 'none';

    } catch (error) {
      console.error("PDF Export failed", error);
      alert("Export failed. Please try again.");
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden text-white bg-black selection:bg-cyan-500 selection:text-black font-sans"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Background />

      {/* Logo Upload Component - Positions itself fixed top-right */}
      <LogoUploader onUpload={setLogoUrl} currentLogo={logoUrl} />

      {/* Main Slide Content */}
      <main className="w-full h-full relative z-20">
        <SlideRenderer slideIndex={currentSlide} />
      </main>

      {/* Navigation Controls - Mobile Responsive */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 md:gap-4 bg-black/50 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 md:p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ChevronLeft size={20} className="md:w-5 md:h-5" />
        </button>
        <span className="text-xs md:text-sm font-mono text-gray-400 px-1">
          {currentSlide + 1} <span className="text-gray-600">/</span> {TOTAL_SLIDES}
        </span>
        <button
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="p-2 md:p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ChevronRight size={20} className="md:w-5 md:h-5" />
        </button>

        <div className="w-px h-4 bg-gray-700 mx-1 md:mx-2"></div>

        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="flex items-center gap-1 md:gap-2 text-xs font-bold uppercase tracking-wider hover:text-cyan-400 transition disabled:opacity-50 min-h-[44px] px-2"
        >
          {isExporting ? (
            <span>{exportProgress}%</span>
          ) : (
            <>
              <Download size={14} className="md:w-3.5 md:h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </>
          )}
        </button>
      </div>

      {/* Hidden Container for PDF Generation */}
      {/* This renders ALL slides statically in a hidden column to be captured by html2canvas */}
      <div
        id="pdf-generator-container"
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '1920px',
          zIndex: -100
        }}
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
          <div
            key={idx}
            className="print-slide relative w-[1920px] h-[1080px] bg-black overflow-hidden flex flex-col p-16 border-b border-gray-800"
          >
            {/* Re-instantiate background logic for static capture */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black z-0"></div>

            <div className="relative z-10 w-full h-full">
              <SlideRenderer slideIndex={idx} />
            </div>

            {/* Logo in Print Mode - Positioned Top Right */}
            {logoUrl && (
              <div className="absolute top-12 right-12 z-50 w-48">
                <img src={logoUrl} alt="TalentlyX" className="w-full h-auto object-contain mix-blend-screen" />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;