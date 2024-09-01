import React from 'react';

const Gallery = () => {
  return (
    <>
      {/* Desktop Version - Visible on large screens (lg) and larger */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-9 mb-32">
        <div className="w-72 h-64 bg-gray-200 border-none flex items-center justify-center bg-transparent">
          <h1 className="text-3xl font-clash-bold text-[#204289] transform -rotate-90">GALLERY</h1>
        </div>
        
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
          <div className="w-72 h-64 bg-gray-200 border border-[#204289]"></div>
        
      </div>

      {/* Mobile/Tablet Version - Visible on screens smaller than lg */}
      <div className="block lg:hidden p-4">
        <h1 className="text-3xl font-clash-bold text-[#204289] text-center mb-4">GALLERY</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]"></div>
        
        </div>
      </div>
    </>
  );
};

export default Gallery;
