import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">SupercarSales</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-red-500 transition-colors">Inventory</Link></li>
            <li><Link href="#" className="hover:text-red-500 transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-red-500 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}