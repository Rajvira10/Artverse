import React, {useState} from 'react'
import {BsFillSuitHeartFill as HeartIconSolid} from 'react-icons/bs'
import {AiOutlineHeart as HeartIcon} from 'react-icons/ai'

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

  


const FeaturedArts = () => {
    const [likes, setLikes] = useState([artworks[0].likes, artworks[1].likes, artworks[2].likes])
  return (
    <div className='home__featured__artworks'>
    <div className='w-11/12 md:w-8/12 mx-auto min-h-max pb-16'>
      <h2 className='text-3xl pt-10 text-center md:text-start font-bold'>Featured Artworks</h2>
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
                <p className="text-lg font-bold text-gray-900">{artwork.price}</p>
              </div>
            </div>
          </a>))}
          
      </div>
      </div>

    </div>
  )
}

export default FeaturedArts