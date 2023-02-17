import {BsFillSuitHeartFill as HeartIconSolid} from 'react-icons/bs'
import {AiOutlineHeart as HeartIcon} from 'react-icons/ai'
import { Inter } from '@next/font/google'
import Navbar from 'components/Navbar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const artworks = [
    {
      title: 'Untitled #1',
      artist: 'John Smith',
      description: 'This bold abstract painting uses vibrant colors to create a sense of movement and energy.',
      image: '/heroimage.png',
      price: '$500',
      likes: 200,
      link: 'https://example.com/artwork/123'
    },
    {
      title: 'Landscape with Mountains',
      artist: 'Jane Doe',
      description: 'This stunning landscape painting captures the beauty and majesty of the natural world.',
      image: '/heroimage.png',
      price: '$500',
      likes: 500,
      link: 'https://example.com/artwork/456'
    },
    {
      title: 'Portrait of a Woman',
      artist: 'Bob Johnson',
      description: 'This striking portrait uses subtle shading and lighting to capture the subject\'s essence.',
      image: '/heroimage.png',
      price: '$500',
      likes: 600,
      link: 'https://example.com/artwork/789'
    }
  ]

  const [likes, setLikes] = useState([artworks[0].likes, artworks[1].likes, artworks[2].likes])

  return (
    <>
      <Navbar/>
      <div className="heroimg text-white">
        <div className='w-1/3 pl-[5%] pt-[15%]'>
        <h3 className='text-xl text-[rgba(197,163,111,255)] mb-2'>Welcome to </h3>
        <h1 className='text-4xl'>ARTVERSE!!!</h1>
        <h4 className='mt-2'>Explore a wide range of artwork from established and emerging artists alike. With our easy-to-use platform, you can browse, discover, and even sell your own art.</h4>
        </div>
       
      </div>
      <div className='home__featured__artworks'>
      <div className='w-8/12 mx-auto h-[1000px]'>
        <h2 className='text-2xl'>Featured Artworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {artworks.map((artwork, index) => (
            <a href={artwork.link} key={index} className="bg-white rounded-lg shadow-2xl overflow-hidden p-5">
              <div className="aspect-square">
                <img className="object-cover min-h-[300px]" src={artwork.image} alt={artwork.title} />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">{artwork.title}</h3>
                  <button className="p-1">
                    <HeartIcon className="h-6 w-6 text-red-500" />
                  </button>
                </div>
                <p className="text-sm font-medium text-gray-500 mb-2">{artwork.artist}</p>
                <p className="text-sm text-gray-500 mb-2">{artwork.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center">
                    {likes[index] > 0 ? (
                      <HeartIconSolid
                        className="h-5 w-5 text-red-500 cursor-pointer"
                        onClick={() => handleLike(index)}
                      />
                    ) : (
                      <HeartIcon
                        className="h-5 w-5 text-gray-400 cursor-pointer"
                        onClick={() => handleLike(index)}
                      />
                    )}
                    <span className="ml-2 text-gray-500">{artwork.likes}</span>
                  </div>
                  <p className="text-gray-500">{artwork.price}</p>
                </div><p className="text-lg font-bold text-gray-900">{artwork.price}</p>
              </div>
            </a>))}
            {/* {artworks.map((artwork, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <img className="h-48 w-full object-cover" src={artwork.image} alt={artwork.title} />
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{artwork.title}</h3>
                <p className="mt-2 text-base text-gray-500">{artwork.artist}</p>
                <p className="mt-2 text-base text-gray-500">{artwork.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center">
                    {likes[index] > 0 ? (
                      <HeartIconSolid
                        className="h-5 w-5 text-red-500 cursor-pointer"
                        onClick={() => handleLike(index)}
                      />
                    ) : (
                      <HeartIcon
                        className="h-5 w-5 text-gray-400 cursor-pointer"
                        onClick={() => handleLike(index)}
                      />
                    )}
                    <span className="ml-2 text-gray-500">{artwork.likes}</span>
                  </div>
                  <p className="text-gray-500">{artwork.price}</p>
                </div>
              </div>
            </div>
          ))} */}

        </div>
        </div>
  
      </div>
    </>
  )
}
