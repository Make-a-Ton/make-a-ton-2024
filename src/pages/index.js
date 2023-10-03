import { Inter } from 'next/font/google'
import Hero from "@/sections/Hero/Hero";
import Join from "@/sections/join/join";
import About from '@/sections/About';
import Statistics from '@/sections/Statistics';
import Prizes from "@/sections/Prizes/Prizes";
import Footer from "@/sections/Footer/Footer";
import Faq from "@/sections/Faq";
import Schedule from "@/sections/schedule/schedule";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <main>
            <Hero />
            <About />
            <Statistics />
            <Prizes />
            <Schedule />
            <Faq />
            <Join />
            <Footer />
        </main>
    )
}
