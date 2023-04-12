import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>ArtGallery - Discover and Buy Art Online</title>
        <meta name="description" content="Discover and buy art online from a variety of artists. Browse artwork, organize your favorites, and buy and sell with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block xl:inline">Discover and Buy</span>{' '}
            <span className="block text-indigo-600 xl:inline">Art Online</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl">
            Discover artwork from a variety of artists, organize your favorites, and buy and sell with ease on ArtGallery.
          </p>
          <div className="mt-10">
            <Link href="/discovery" className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Browse Artwork
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
