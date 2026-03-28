
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Footer from './components/layout/Footer'

const page = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </main>
    </div>
  )
}

export default page
