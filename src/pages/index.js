import {Inter} from 'next/font/google'
import Hero from "@/sections/Hero/Hero";
import Join from "@/sections/join/join";
import About from '@/sections/About';
import Statistics from '@/sections/Statistics';
import Prizes from "@/sections/Prizes/Prizes";
import Footer from "@/sections/Footer/Footer";
import Faq from "@/sections/Faq";
import Schedule from "@/sections/schedule/schedule";
import Sponsor from '@/sections/sponsor/sponsor';
import MlhPrizes from "@/sections/MlhPrizes/MlhPrizes";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (
        <main>
            <a
                className="right-4 md:right-[80px]"
                id="mlh-trust-badge"
                style={{
                    display: 'block',
                    maxWidth: '120px',
                    minWidth: '60px',
                    position: 'fixed',

                    top: '0',
                    width: '10%',
                    zIndex: '10000',
                }}
                href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=yellow"
                target="_blank"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-yellow.svg"
                    alt="Major League Hacking 2024 Hackathon Season"
                    style={{width: '100%'}}
                />
            </a>
            <Hero/>
            <About/>
            <Statistics/>
            <Prizes/>
            <MlhPrizes/>
            <Schedule/>
            <Sponsor/>
            <Faq/>
            <Join/>
            <Footer/>
        </main>
    )
}
