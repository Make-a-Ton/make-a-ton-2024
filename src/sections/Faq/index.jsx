import React from 'react';
import {FAQS} from "./faq.js";
import Accordion from "@/sections/Faq/Accordion";

const Index = () => {

    return (
        <section className='bg-[#204289] lg:p-20 pb-5'>
            <div className="flex flex-wrap justify-center items-center">
                {/* FAQ Heading on the left for desktop */}
                <div className="w-6/12 lg:w-4/12 ">
                    <div className="h-full flex flex-col justify-center items-center">
                        <h1 className='text-white text-4xl font-bold leading-12 tracking-normal text-left my-5'>
                            FAQ
                        </h1>
                    </div>
                </div>

                {/* FAQs section */}
                <div className="w-full lg:w-7/12 mx-5">
                    <div
                        id="accordion-flush"
                        className="bg-[#204289] lg:max-h-[500px] overflow-y-auto lg:pr-8"
                    >
                        {FAQS.map((faq, index) => (
                            <Accordion key={index} question={faq.ques} answer={faq.ans}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Index;
