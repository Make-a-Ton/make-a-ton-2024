import React,{useState} from 'react';
import Image from "next/image";

const Gallery = () => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(null);
  };
  return (
    <>
      {/* Desktop Version - Visible on large screens (lg) and larger */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-9 mb-32">
        <div className="w-72 h-64 bg-gray-200 border-none flex items-center justify-center bg-transparent" >
          <h1 className="text-3xl font-clash-bold text-[#204289] transform -rotate-90">GALLERY</h1>
        </div>
        
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}> 
            <Image
                src={hoveredImageIndex === 0  ? "/assets/hero_effect.png": "/assets/Gallery/6.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 1  ? "/assets/hero_effect.png": "/assets/Gallery/4.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 2  ? "/assets/hero_effect.png": "/assets/Gallery/16.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 3  ? "/assets/hero_effect.png": "/assets/Gallery/23.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 4  ? "/assets/hero_effect.png": "/assets/Gallery/24.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 5  ? "/assets/hero_effect.png": "/assets/Gallery/19.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 6  ? "/assets/hero_effect.png": "/assets/Gallery/10.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 7 ? "/assets/hero_effect.png": "/assets/Gallery/15.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 8  ? "/assets/hero_effect.png": "/assets/Gallery/14.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 8  ? "/assets/hero_effect.png": "/assets/Gallery/7.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 8  ? "/assets/hero_effect.png": "/assets/Gallery/8.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 8  ? "/assets/hero_effect.png": "/assets/Gallery/21.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 8  ? "/assets/hero_effect.png": "/assets/Gallery/12.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
          <div className="w-72 h-64 bg-[#204289] border border-[#204289]"onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
          <Image
                src={hoveredImageIndex === 8  ? "/assets/hero_effect.png": "/assets/Gallery/20.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
          </div>
        
      </div>

       {/* Mobile/Tablet Version - Visible on screens smaller than lg */}
       <div className="block lg:hidden p-4">
        <h1 className="text-3xl font-clash-bold text-[#204289] text-center mb-4">GALLERY</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
          <Image
                src={"/assets/Gallery/6.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
        
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/4.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/16.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/23.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/21.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/13.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/19.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/15.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/24.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
            <div className="w-full h-40 bg-gray-200 border border-[#204289]">
            <Image
                src={"/assets/Gallery/20.jpg"}
                alt={"gallery"}
                width={5184}
                height={3456}
                objectFit="contain"
                className='h-full w-full'
              />
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Gallery;
