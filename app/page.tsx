import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCars from './components/FeaturedCars'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <FeaturedCars />
      </main>
      <Footer />
    </div>
  )
}
