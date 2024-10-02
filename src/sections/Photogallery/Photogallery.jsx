import React, { useMemo } from "react";
import Image from "next/image";

// PixelBlock component (unchanged)
const PixelBlock = ({ color }) => (
  <div className={`aspect-square bg-${color}`}></div>
);

// StatBlock component (unchanged)
const StatBlock = ({ number, label }) => (
  <div className="aspect-square bg-customYellow p-2 text-center flex flex-col justify-center items-center">
    <div className="text-xl font-bold">{number}+</div>
    <div className="text-sm">{label}</div>
  </div>
);

// TextBlock component (unchanged)
const TextBlock = ({ text }) => (
  <div className="aspect-square bg-customYellow p-2 flex items-center justify-center text-center">
    <p>{text}</p>
  </div>
);

// ImageBlock component (unchanged)
const ImageBlock = ({ src, alt }) => (
  <div className="aspect-square bg-white flex items-center justify-center ">
    <Image
      src={src}
      alt={alt}
      width={350}
      height={350}
      // fill={true}
      objectFit="fill"
    />
  </div>
);

// Track component (unchanged)
const Track = ({ blockCount }) => (
  <div className="grid grid-cols-5 gap-0">
    {Array(blockCount)
      .fill()
      .map((_, i) => (
        <PixelBlock key={i} color={i % 2 ? "204289" : "white"} />
      ))}
  </div>
);

// Enhanced Photogallery Component
const Photogallery = () => {
  // Define the content for the left side
  const leftGalleryContent = useMemo(
    () => [
      { type: "color", color: "customYellow" },
      { type: "text", text: "Welcome!" },
      { type: "color", color: "customBlue" },
      { type: "image", src: "/assets/logo.png", alt: "Logo" },
      { type: "color", color: "white" },
      { type: "stat", number: 50, label: "Colleges" },
      { type: "color", color: "customBlue" },
      { type: "color", color: "white" },
      { type: "color", color: "customYellow" },
      { type: "text", text: "Join us!" },
      { type: "color", color: "customBlue" },
      { type: "color", color: "white" },
      { type: "stat", number: 5000, label: "Registrations" },
      { type: "color", color: "customBlue" },
    ],
    []
  );

  // Define the content for the right side
  const rightGalleryContent = useMemo(
    () => [
      { type: "color", color: "customBlue" },
      { type: "color", color: "white" },
      { type: "stat", number: 30, label: "Partners" },
      { type: "color", color: "customYellow" },
      { type: "text", text: "Explore!" },
      { type: "color", color: "customBlue" },
      { type: "image", src: "/assets/gallery/1.jpg", alt: "Icon 1" },
      { type: "color", color: "white" },
      { type: "color", color: "customBlue" },
      { type: "image", src: "/assets/icon2.png", alt: "Icon 2" },
      { type: "color", color: "customYellow" },
      { type: "text", text: "Learn More" },
      { type: "color", color: "white" },
      { type: "color", color: "customBlue" },
    ],
    []
  );

  const GalleryPixel = ({ content }) => (
    <div className="grid grid-cols-2 gap-0">
      {content.map((block, index) => {
        switch (block.type) {
          case "color":
            return <PixelBlock key={index} color={block.color} />;
          case "stat":
            return (
              <StatBlock
                key={index}
                number={block.number}
                label={block.label}
              />
            );
          case "text":
            return <TextBlock key={index} text={block.text} />;
          case "image":
            return <ImageBlock key={index} src={block.src} alt={block.alt} />;
          default:
            return null;
        }
      })}
    </div>
  );

  return (
    <div className="bg-customBlue">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
        <div className="md:col-span-2">
          <GalleryPixel content={leftGalleryContent} />
        </div>
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <Image src="/assets/car.png" alt="car" width={120} height={150} />
          </div>
          <div className="h-full overflow-hidden">
            <Track blockCount={15} />
            <div className="h-[65%] grid grid-cols-5">
              <div className="h-full bg-white"></div>
              <div className="h-full bg-customBlue"></div>
              <div className="h-full bg-white"></div>
              <div className="h-full bg-customBlue"></div>
              <div className="h-full bg-white"></div>
            </div>
            <Track blockCount={20} />
            <div className="h-full bg-white"></div>
          </div>
        </div>
        <div className="md:col-span-2">
          <GalleryPixel content={rightGalleryContent} />
        </div>
      </div>
    </div>
  );
};

export default Photogallery;
