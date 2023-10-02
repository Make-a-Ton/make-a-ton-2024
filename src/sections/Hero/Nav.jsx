import React, { Fragment } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Schedule', link: '#schedule' }, // Fixed typo in "Schedule"
    { name: 'Sponsor', link: '#sponsor' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Code of Conduct', link: '#codeOfConduct' }, // Fixed typo in "Code of Conduct"
    { name: 'Team', link: '#team' },
    { name: 'REGISTER', link: '/register' },
];

const Nav = () => {
    return (
        <Fragment>
            <div className="flex flex-row justify-center items-center px-5 py-3">
                <div className="flex flex-col sm:flex-row text-gray-900 gap-5">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex text-[16] flex-row font-satoshi-regular items-center justify-center gap-2 text-white ${
                                item.name === 'REGISTER'
                                    ? 'text-red-950 font-satoshi-bold rounded bg-white p-2'
                                    : ''
                            } `}
                        >
                            <Link href={item.link}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Nav;
