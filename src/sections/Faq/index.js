import React, {useState} from 'react';
import Image from "next/image";

import down from "../../../public/assets/chevore-down.svg";

const faqs = [
    {
        ques: "Is registration free?",
        ans: "Yes, registration is  free of charge.",
    },
    {
        ques: "Is this hackathon only for CUSAT students?",
        ans: "No. One category is exclusively for cusat students. The rest of the event is equally open to all.",
    },
    {
        ques: "What is the theme of the hackathon?",
        ans: "Make-a-ton is an open hackathon. Unlike other hackathons, we don't stress too much on the marketing side of things. We believe in creating technology that can positively impact the world.",
    },
    {
        ques: "Are premade products allowed?",
        ans: "No, we all start coding at the same time. It’s cool to work on designs beforehand, digital mockups, open source frameworks, and anything else available to everyone, but keep things within fair limits.",
    },
    {
        ques: "Will I get certificates?",
        ans: "Yes, certificates will be provided to all participants on completion.",
    },
    {
        ques: "When will prizes and other details be announced?",
        ans: "Currently the cash prize alone stands worth 50K. More details regarding the schedule, sponsors, main prizes and other category awards will be informed in a mail to the registered candidates.",
    },
    {
        ques: "Do we get any complementary?",
        ans: "Yes, of course. T-shirts and other amazing swags are awaiting all the registered participants.",
    },
    {
        ques: "I'm a newbie, is there any point in registering?",
        ans: "Hackathons are a great way to learn about new technology and make new friends. We want a diverse audience and beginners are welcome.",
    },
    {
        ques: "I don't know how to code, is this event for me?",
        ans: "Designers, marketers and all sorts of skills are required for a successful company. We believe there is something for everyone.",
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="bg-blue-900 text-white p-4 py-5">
            <div className="flex justify-evenly items-center flex-wrap px-4 my-5 py-5">
                <h1 className="text-3xl font-bold mb-4">FAQ</h1>
                <div className="w-full lg:w-1/2 lg:border-r-4 lg:pr-5">
                    {faqs.map((faq, index) => (
                        <div key={index} className="my-5 border border-white p-2 lg:mr-5">
                            <button
                                onClick={() => handleClick(index)}
                                className="w-full text-left flex justify-between items-center mb-2"
                            >
                                <span>{faq.ques}</span>
                                <Image src={down} alt="down arrow" className="h-7 mr-2"/>
                            </button>
                            {activeIndex === index && <p>{faq.ans}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
