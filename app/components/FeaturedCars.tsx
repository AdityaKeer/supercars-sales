import Image from 'next/image'

const featuredCars = [
  { 
    id: 1, 
    name: 'Ferrari SF90 Stradale', 
    price: '$625,000', 
    image: '/ferrari-sf90.jpg'
  },
  { 
    id: 2, 
    name: 'Lamborghini Aventador', 
    price: '$517,770', 
    image: '/lambo-aventador.jpg'
  },
  { 
    id: 3, 
    name: 'Bugatti Chiron', 
    price: '$3,000,000', 
    image: '/bugatti-chiron1.jpg'
  },
]

export default function FeaturedCars() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Supercars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative aspect-[16/9]">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-gray-300 mb-4">Starting at {car.price}</p>
                <a href="#" className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

