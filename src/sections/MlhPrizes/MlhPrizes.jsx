import React from 'react';
import img1 from '../../../public/assets/Trackprizes/trck2.jpg'
import img2 from '../../../public/assets/Trackprizes/trck3.jpg'
import img3 from '../../../public/assets/Trackprizes/trck4.jpg'
import img4 from '../../../public/assets/Trackprizes/trck5.jpg'
import img5 from '../../../public/assets/Trackprizes/trck6.jpg'
import img6 from '../../../public/assets/Trackprizes/trck7.jpg'
import img7 from '../../../public/assets/Trackprizes/trck8.jpg'
import trackprize from '../../../public/assets/Trackprizes/trck9.jpg'
import track2 from '../../../public/assets/Trackprizes/trck1.jpg';
import Image from "next/image";

const MlhPrizes = () => {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-0 md:mx-28">
    <div className="order-4 sm:order-1">
      <Image
        loading="lazy"
        src={track2}
        alt="Hack from home kit"
      />
    </div>
    <div className="order-2 sm:order-2">
      <Image
        loading="lazy"
        src={img1}
        alt="10K"
      />
    </div>
    <div className="order-5 sm:order-3">
      <Image
        loading="lazy"
        src={img2}
        alt="best AI"
      />
    </div>
    <div className="order-3 sm:order-4">
      <Image
        loading="lazy"
        src={img3}
        alt="Adapt track"
      />
    </div>
    <div className="order-1 sm:order-5">
      <Image
        loading="lazy"
        src={img4}
        alt="track prizes"
      />
    </div>
    <div className="order-6 sm:order-6">
      <Image
        loading="lazy"
        src={img5}
        alt="Best use of conductor"
      />
    </div>
    <div className="order-8 sm:order-7">
      <Image
        loading="lazy"
        src={img6}
        alt="Arduino tiny"
      />
    </div>
    <div className="order-9 sm:order-8">
      <Image
        loading="lazy"
        src={img7}
        alt="Best use od auth0"
      />
    </div>
    <div className="order-7 sm:order-9">
      <Image
        loading="lazy"
        src={trackprize}
        alt="arduino kit"
      />
    </div>
  </div>
  
  );
}

export default MlhPrizes;
