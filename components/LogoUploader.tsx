import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface LogoUploaderProps {
  onUpload: (url: string) => void;
  currentLogo: string | null;
}

export const LogoUploader: React.FC<LogoUploaderProps> = ({ onUpload, currentLogo }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  return (
    <div className="fixed top-3 md:top-6 right-4 md:right-8 z-50 flex items-center space-x-3">
      {currentLogo ? (
        <div className="h-8 md:h-14 w-auto cursor-pointer" onClick={() => fileInputRef.current?.click()}>
          <img
            src={currentLogo}
            alt="Logo"
            className="h-full object-contain mix-blend-screen"
          />
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-white/10 transition text-xs text-gray-300"
        >
          <Upload size={12} className="md:w-3.5 md:h-3.5" />
          <span className="hidden md:inline">Upload Logo</span>
        </button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/svg+xml"
      />
    </div>
  );
};