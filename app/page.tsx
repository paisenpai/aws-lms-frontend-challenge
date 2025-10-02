import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import HowItWorks from "@/components/HowItWorks/HowItWorks"
import Departments from "@/components/Departments/Departments"
import Leaderboards from "@/components/Leaderboards/Leaderboards"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Departments />
        <Leaderboards />
      </main>
      <Footer />
    </>
  )
}
