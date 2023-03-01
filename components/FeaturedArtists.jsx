import Link from 'next/link'
import React from 'react'

const FeaturedArtists = () => {
  const artists = [
    {
      name: 'John Smith',
      bio: 'John Smith is a painter and sculptor based in New York City. His work explores the intersection of art, politics, and identity.',
      image: '/artist1.jpg',
      link: 'https://example.com/artist/123'
    },
    {
      name: 'Jane Doe',
      bio: 'Jane Doe is a photographer and mixed media artist based in Los Angeles. Her work challenges traditional notions of beauty and femininity.',
      image: '/artist2.jpg',
      link: 'https://example.com/artist/456'
    },
    {
      name: 'Bob Johnson',
      bio: 'Bob Johnson is a digital artist and animator based in San Francisco. His work combines cutting-edge technology with traditional artistic techniques.',
      image: '/artist3.jpg',
      link: 'https://example.com/artist/789'
    }
  ]

  return (
    <div className="bg-gray-200 py-8">
      <div className="md:w-8/12 w-11/12  mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <h2 className="text-3xl font-bold text-gray-900 md:text-start text-center ">Featured Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {artists.map((artist, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full bg-gray-300 flex items-center justify-center">
                <img className="h-40 w-40 object-cover rounded-full" src={artist.image} alt={artist.name} />
              </div>
              <div className="px-4 py-5 sm:p-6 ">
                <h3 className="text-lg font-bold leading-6 text-gray-900">{artist.name}</h3>
                <p className="mt-2 text-base text-gray-500">{artist.bio}</p>
                <div className="mt-3 flex justify-end">
                  <Link href={artist.link} className="bg-[rgba(197,163,111,255)] px-5 py-2 rounded-full cursor-pointer hover:scale-105 duration-200 text-base font-medium text-slate-100 hover:text-white">View Profile</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedArtists
