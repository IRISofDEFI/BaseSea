
import React, { useState, useCallback, useRef } from 'react';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';

export default function FileUpload({ onFileChange, previewUrl }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback((files) => {
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        onFileChange(file, url);
      } else {
        console.warn("Please upload an image file.");
        // Optionally, you can add user-facing feedback here.
      }
    }
  }, [onFileChange]); // Added onFileChange to dependencies

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]); // Dependency is handleFiles

  const handleChange = useCallback((e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]); // Dependency is handleFiles
  
  const onBoxClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <label className="text-lg font-semibold mb-2 block">Upload File</label>
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onBoxClick}
        className={`relative aspect-video w-full border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 hover:border-blue-600'
        }`}
      >
        <input 
          ref={inputRef}
          type="file" 
          className="hidden" 
          accept="image/*"
          onChange={handleChange}
          multiple={false}
        />
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-contain rounded-lg p-2" />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 pointer-events-none">
            <UploadCloud className="w-16 h-16 mb-4" />
            <p className="font-semibold">Drag & drop your file here, or click to browse</p>
            <p className="text-sm mt-2">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
         {previewUrl && (
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl pointer-events-none">
             <div className="flex flex-col items-center justify-center text-white">
                <ImageIcon className="w-12 h-12 mb-2" />
                <p>Click or drag to replace</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
