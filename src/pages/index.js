import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/sections/Hero/Hero";
import Faq from "@/sections/Faq/Faq";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
        <Faq/>
    </main>
  )
}
