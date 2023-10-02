import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/sections/Hero/Hero";
import About from '@/sections/About';
import Statistics from '@/sections/Statistics';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <About />
      <Statistics />
    </main>
  )
}
