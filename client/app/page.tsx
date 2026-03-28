
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Footer from './components/layout/Footer'
import UseCases from './components/sections/UseCases'

const page = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <UseCases />
        <Footer />
      </main>
    </div>
  )
}

export default page
