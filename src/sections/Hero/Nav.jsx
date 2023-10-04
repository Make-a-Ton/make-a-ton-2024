import React, { Fragment } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Schedule', link: '#schedule' },
    { name: 'Sponsor', link: '#sponsor' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Code of Conduct', link: '#codeOfConduct' },
    { name: 'Team', link: '#team' },
    { name: 'REGISTER', link: 'https://forms.eventsradar.in/makeaton/' },
];

const Nav = () => {
    return (
        <div className="hidden lg:block">
            <div className="flex flex-row justify-center items-center px-5 py-3">
                <div className="flex flex-col sm:flex-row text-gray-900 gap-5">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex text-[16] flex-row font-satoshi-regular items-center justify-center gap-2 ${
                                item.name === 'REGISTER'
                                    ? 'text-gray-900 font-bold rounded bg-white p-2'
                                    : 'text-white'
                            } `}
                        >
                            <Link href={item.link}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nav;
