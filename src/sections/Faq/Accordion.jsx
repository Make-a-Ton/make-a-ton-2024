import React, { useState } from "react";

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-[1px] border-white mb-3">
      <button
        onClick={toggleAccordion}
        className="w-full text-white ] text-left p-3  focus:outline-none flex justify-between items-center"
      >
        <span>{question}</span>
        <svg
          className={`w-4 h-4 transition-transform transform ${
            isOpen ? "rotate-180 duration-300" : "rotate-0 duration-300"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div  className={`p-3 text-white shadow-md transition-max-h ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden `}
      >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
