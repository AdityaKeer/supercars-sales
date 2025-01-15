export default function Footer() {
    return (
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Aditya Keer. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-red-500 mx-2 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-500 mx-2 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-500 mx-2 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    )
  }