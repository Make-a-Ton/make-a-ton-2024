import React, {Fragment, useEffect} from 'react';
import Link from "next/link";


const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Schedule', link: '#schedule' },
    { name: 'Sponsor', link: '#sponsor' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Code of Conduct', link: '#codeOfConduct' },
    { name: 'Team', link: '#team' },
    { name: 'REGISTER', link: '/register' },
];

const Mobilenav = () => {
    useEffect(() => {
        const Toggle = document.querySelector('#toggle');
        const overlay = document.querySelector('#overlay');
        const closeIcon = document.querySelector('#close');

        Toggle.addEventListener('click', () => {
            Toggle.classList.add('active');
            overlay.classList.add('open');
        });


        overlay.addEventListener('click', () => {
            Toggle.classList.remove('active');
            overlay.classList.remove('open');
        });


        return () => {
            Toggle.removeEventListener('click', () => {
                Toggle.classList.toggle('active');
                overlay.classList.toggle('open');
            });
            closeIcon.removeEventListener('click', () => {
                Toggle.classList.remove('active');
                overlay.classList.remove('open');
            });


        };
    }, []);

    return (
        <Fragment>
            <div className="button_container" id="toggle">
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>

            <div className="overlay" id="overlay" >
                <div id="close" >
                    <span className="top"></span>
                </div>
                <nav>
                    <ul>
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                className={`font-satoshi-regular my-4 ${
                                    item.name === 'REGISTER'
                                        ? 'text-gray-900 font-bold rounded bg-white p-2'
                                        : 'text-white'
                                } `}
                            >
                                <Link href={item.link}>{item.name}</Link>
                            </div>
                        ))}
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default Mobilenav;
