import React from 'react';

const Box = () => {
    return (
        <div className="flex justify-center items-center mt-8 mb-8">
            <div className="flex p-8 justify-between items-center" style={{ width: '1388px', background: '#F6F5F5' }}>
                {/* Left side */}
                <div>
                    <div className="text-blue-800 font-Satoshi sm:text-4xl text-xl font-extrabold">
                        Have Questions?
                    </div>
                    <div className="text-blue-800 font-Satoshi sm:text-4xl text-xl font-bold">
                        Looking for a Team?
                    </div>
                    {/* Content for the left side goes here */}
                </div>

                {/* Right side */}
                <div className="flex items-center">
                    <div className="text-blue-800 font-ClashDisplay sm:text-4xl text-xl font-bold mr-2 ">
                        Join Our Telegram
                    </div>
                    <img
                        src="/assets/telegram-logo.png"  // Replace with the actual image path
                        alt="Image"
                        className="w-32 h-32"  // Adjust width and height accordingly
                    />
                </div>
            </div>
        </div>
    );
};

export default Box;
