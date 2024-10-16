import React, { useEffect, useState } from 'react';
import Image from "next/image";

const Orgteam = () => {
    const [hoveredMember, setHoveredMember] = useState(null);
    const [hoveredPosition, setHoveredPosition] = useState(null);
    const [randomNumbers, setRandomNumbers] = useState([]); 
    const [hoveredlocation, setHoveredLocation] = useState(null);

    const imgDetails = [
        { name: 'Ameen', position: 'Core Organizer😎', path: '1.jpg' },
        { name: 'Karthik', position: 'Core Organizer😎', path: '2.jpg' },
        { name: 'Mishal', position: 'Core Organizer😎', path: '3.jpg' },
        { name: 'Aswin', position: 'Core Organizer😎', path: '24.jpg' },
        { name: 'Aakash', position: 'Core Organizer😎', path: '25.jpg' },
    ];

    
    useEffect(() => {
        function generateUniqueRandomNumbers(min, max, count) {
            const numbers = new Set();
            while (numbers.size < count) {
                const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                numbers.add(randomNum);
            }
            return Array.from(numbers);
        }

        const numbers = generateUniqueRandomNumbers(0, 54, imgDetails.length);
        setRandomNumbers(numbers); 
        setHoveredLocation(numbers[0]); 
    }, []);

    const zippedArray = randomNumbers.map((num, index) => ({
        [num]: imgDetails[index],
    }));

    const names = ['Karthik', 'Aakash', 'Ameen'];
    let nameInterval;

    useEffect(() => {
        if (randomNumbers.length > 0) {
            setHoveredMember(zippedArray.find((item) => item[randomNumbers[0]])?.[randomNumbers[0]].name);
            setHoveredPosition(zippedArray.find((item) => item[randomNumbers[0]])?.[randomNumbers[0]].position);

            const intervalId = setInterval(() => {
                const num = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
                setHoveredMember(zippedArray.find((item) => item[num])?.[num].name);
                setHoveredPosition(zippedArray.find((item) => item[num])?.[num].position);
                setHoveredLocation(num);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [randomNumbers]); 

    // const startFlippingNames = () => {
    //     let currentIndex = 0;
    //     nameInterval = setInterval(() => {
    //         currentIndex = (currentIndex + 1) % names.length;
    //         setCurrentName(names[currentIndex]);
    //     }, 3000);
    // };

    // const stopFlippingNames = () => {
    //     clearInterval(nameInterval);
    // };

    return (
        <>
            <div className='flex flex-col md:flex-row w-screen md:h-[50vh]'>
                <div className='w-screen h-[80vh] md:h-full grid grid-cols-5 md:w-4/6 md:grid-cols-11'>
                    {Array.from({ length: 55 }, (_, num) => {
                        if (randomNumbers.includes(num)) {
                            return (
                                <div
                                    key={num}
                                    className={`bg-[#204289] relative group ${
                                        hoveredlocation == num
                                            ? `opacity-100 ${num % 3 == 0 ? 'border-[#204289]' : num % 3 == 1 ? 'border-[#EAAF20]' : 'border-white'}`
                                            : ''
                                    }`}
                                    onMouseEnter={() => {
                                        setHoveredMember(zippedArray.find((item) => item[num])?.[num].name);
                                        setHoveredPosition(zippedArray.find((item) => item[num])?.[num].position);
                                        setHoveredLocation(randomNumbers.includes(num) ? num : hoveredlocation);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredMember(null);
                                        setHoveredPosition(null);
                                    }}
                                >
                                    <Image
                                        key={num}
                                        src={`/assets/Gallery/${zippedArray.find((item) => item[num])?.[num].path}`}
                                        alt={'gallery'}
                                        layout='fill'
                                        objectFit='cover'
                                        className={`h-full w-full transition-all duration-100 filter border-0 ${
                                            hoveredlocation == num ? 'grayscale-0' : 'grayscale'
                                        }`}
                                    />
                                </div>
                            );
                        } else {
                            if (num % 3 == 0) return <div key={num} className='bg-[#204289]'></div>;
                            else if (num % 3 == 1) return <div key={num} className='bg-[#EAAF20]'></div>;
                            else return <div key={num} className='bg-white'></div>;
                        }
                    })}
                </div>
                <div className='w-screen md:w-2/6 h-[20vh] md:h-full bg-[#204289] flex items-center justify-center'>
                {hoveredMember && (
                    <div className='text-white font-press-start text-center space-y-4'>
                        <h2 className='text-sm md:text-xl font-bold'>Made with ❤️ by Tech Team</h2>
                        <h2 className='text-sm md:text-xl font-bold'>{hoveredMember}</h2>
                        <p className='text-sm md:text-md'>{hoveredPosition}</p>
                    </div>
                )}
            </div>
            </div>
        </>
    );
};

export default Orgteam;
