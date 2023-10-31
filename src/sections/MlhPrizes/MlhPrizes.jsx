import React from 'react';
import img1 from '../../../public/assets/MlhPrizes/1.jpeg';
import img2 from '../../../public/assets/MlhPrizes/2.jpeg';
import img3 from '../../../public/assets/MlhPrizes/3.jpeg';
import img4 from '../../../public/assets/MlhPrizes/4.jpeg';
import img5 from '../../../public/assets/MlhPrizes/5.jpeg';
import img6 from '../../../public/assets/MlhPrizes/6.jpeg';
import img7 from '../../../public/assets/MlhPrizes/7.jpeg';
import trackprize from '../../../public/assets/MlhPrizes/trackprize.jpeg';
import track2 from '../../../public/assets/MlhPrizes/track2.jpeg';
import Image from "next/image";

const MlhPrizes = () => {
  return (
    <div className="my-8 grid grid-cols-1 mx-28 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-0">
      <div className="">
        <Image src={track2} alt="Image 1" />
      </div>
      <div >
        <Image src={img7} alt="Image 2" />
      </div>
      <div >
        <Image src={img6} alt="Image 3" />
      </div>
      <div >
        <Image src={img4} alt="Image 1" />
      </div>
      <div >
        <Image src={img5} alt="Image 2" />
      </div>
      <div >
        <Image src={img3} alt="Image 3" />
      </div>
      <div >
        <Image src={img2} alt="Image 1" />
      </div>
      <div >
        <Image src={img1} alt="Image 2" />
      </div>
      <div >
        <Image src={trackprize} alt="Image 3" />
      </div>
    </div>
  );
}

export default MlhPrizes;
