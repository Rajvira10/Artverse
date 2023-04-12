import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="font-bold text-lg text-indigo-600">ArtGallery</div>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/artwork">
              <div className="text-gray-700 hover:text-gray-900 ml-8 mr-4">Upload</div>
            </Link>
            <Link href="/discovery">
              <div className="text-gray-700 hover:text-gray-900 mr-4">Discover</div>
            </Link>
            <Link href="/community">
              <div className="text-gray-700 hover:text-gray-900">Community</div>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about">
              <div className="text-gray-700 hover:text-gray-900 mr-4">About</div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-700 hover:text-gray-900">Contact</div>
            </Link>
          </div>
        </nav>
        <div className="mt-8">
          <p className="text-gray-400 text-sm">&copy; 2023 ArtGallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
