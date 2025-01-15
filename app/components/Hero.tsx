import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="/hero-car.jpg"
        alt="Luxury supercar"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Experience Pure Power</h1>
        <p className="text-xl md:text-2xl mb-8">Discover the world's finest supercars</p>
        <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Explore Inventory
        </a>
      </div>
    </section>
  )
}