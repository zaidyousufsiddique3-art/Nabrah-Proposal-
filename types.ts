export interface SlideData {
  id: number;
  title: string;
  type: 'title' | 'content' | 'grid' | 'timeline' | 'pricing' | 'thankyou';
}

export interface PresentationState {
  currentSlide: number;
  totalSlides: number;
  logoUrl: string | null;
  isExporting: boolean;
}
