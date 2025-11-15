import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-brown-900">
            RIO Coffee
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-brown-800 hover:text-brown-600">
              About Us
            </Link>
            <Link href="/products" className="text-brown-800 hover:text-brown-600">
              Products
            </Link>
            <Link href="/process" className="text-brown-800 hover:text-brown-600">
              Our Process
            </Link>
            <Link href="/contact" className="text-brown-800 hover:text-brown-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;