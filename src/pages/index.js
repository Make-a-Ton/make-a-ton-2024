import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/sections/Hero/Hero";
import About from '@/sections/About';
import Statistics from '@/sections/Statistics';
import Prizes from "@/sections/Prizes/Prizes";
import Footer from "@/sections/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Statistics />
      <Prizes />
      <Footer />
    </main>
  )
}
