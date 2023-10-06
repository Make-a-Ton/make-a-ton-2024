import React, {Fragment} from 'react'
import Image from "next/image";

const SilverImages = [
    "/assets/foss.svg",
    "/assets/ieee.png",
    "/assets/echo.png"
]

const CommunityImages = [
    "/assets/dhishna.png",
    "/assets/tinkerhub.png",
    "/assets/ieee cusat sb.png",
    "/assets/gdsc cusat.png",
]



const sponsor = () => {
    return (
        <Fragment>

            <div className="flex flex-col sm:flex-row items-center justify-center w-full my-10">
                <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-regular text-[30px]">
                    Silver Sponsors
                </div>

                <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
                    {SilverImages.map((image, i) => (
                        <div key={i} className={`flex min-h-[150px] p-10 ${i % 2 == 0 ? 'bg-[#F6F5F5]' : ''}`}>
                            <Image src={image} width={100} height={100} className="object-contain"/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center w-full my-10">
                <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-regular text-[30px]">
                    Community Partners
                </div>

                <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
                    {CommunityImages.map((image, i) => (
                        <div key={i} className={`flex min-h-[150px] p-10 ${i % 2 != 0 ? 'bg-[#F6F5F5]' : ''}`}>
                            <Image src={image} width={100} height={100} className="object-contain"/>
                        </div>
                    ))}
                </div>
            </div>

        </Fragment>
    )
}

export default sponsor
