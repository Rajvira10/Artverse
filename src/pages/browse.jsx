import React, { useState } from 'react'
import Link from 'next/link'

const Browse = () => {
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: 'Portrait of a Lady',
      artist: 'John Smith',
      image: 'https://example.com/artwork-1.jpg',
      price: 250,
      likes: 10,
      tags: ['portrait', 'oil painting']
      
    },
    {
      id: 2,
      title: 'Abstract Sunset',
      artist: 'Jane Doe',
      image: 'https://example.com/artwork-2.jpg',
      price: 500,
      likes: 5,
      tags: ['abstract', 'acrylic painting']
    },
    {
      id: 3,
      title: 'Still Life with Fruit',
      artist: 'Bob Johnson',
      image: 'https://example.com/artwork-3.jpg',
      price: 150,
      likes: 2,
      tags: ['still life', 'watercolor painting']
    },
    // additional artworks here...
  ])

  const [filters, setFilters] = useState([])

  const handleFilterChange = (event) => {
    const { value } = event.target
    setFilters((prevFilters) => {
      if (prevFilters.includes(value)) {
        return prevFilters.filter((filter) => filter !== value)
      } else {
        return [...prevFilters, value]
      }
    })
  }

  const filteredArtworks = artworks.filter((artwork) => {
    if (filters.length === 0) {
      return true
    } else {
      return artwork.tags.some((tag) => filters.includes(tag))
    }
  })

  const pageSize = 6 // number of artworks per page
  const pageCount = Math.ceil(filteredArtworks.length / pageSize)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentArtworks = filteredArtworks.slice(startIndex, endIndex)

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Artwork</h2>
            <div className="flex flex-wrap mb-4">
              <button
                className={`mr-4 mb-2 px-4 py-2 rounded-md text-sm font-medium ${filters.includes('portrait') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={handleFilterChange}
                value="portrait"
              >
                Portrait
              </button>
              <button
                className={`mr-4 mb-2 px-4 py-2 rounded-md text-sm font-medium ${filters.includes('landscape') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                Landscape
              </button>
              <button
                className={`mr-4 mb-2 px-4 py-2 rounded-md text-sm font-medium ${filters.includes('abstract') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={handleFilterChange}
                value="abstract"
              >
                Abstract
              </button>
              <button
                className={`mr-4 mb-2 px-4 py-2 rounded-md text-sm font-medium ${filters.includes('still life') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={handleFilterChange}
                value="still life"
              >
                Still Life
              </button>
              <button
                className={`mr-4 mb-2 px-4 py-2 rounded-md text-sm font-medium ${filters.includes('oil painting') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={handleFilterChange}
                value="oil painting"
              >
                Oil Painting
              </button>
              <button
                className={`mr-4 mb-2 px-4 py-2 rounded-md text-sm font-medium ${filters.includes('watercolor painting') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={handleFilterChange}
                value="watercolor painting"
              >
                Watercolor Painting
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {currentArtworks.map((artwork) => (
                <div key={artwork.id} className="bg-white shadow overflow-hidden rounded-lg">
                  <Link href={`/artwork/${artwork.id}`}>
                      <img src={artwork.image} alt={artwork.title} className="h-64 w-full object-cover" />
                  </Link>
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-medium text-gray-900 truncate">{artwork.title}</h3>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500">{artwork.artist}</span>
                      <span className="mx-2 text-sm font-medium text-gray-500">|</span>
                      <span className="text-sm font-medium text-gray-500">{artwork.price}$</span>
                      <button className="ml-2 focus:outline-none" onClick={() => setArtworkLikes((prevLikes) => prevLikes + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* {artwork.likes.includes(user.id) ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          ) : ( */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          {/* )} */}
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-500">{artwork.likes.length}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className={`${
                  currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed':''
                } px-4 py-2 rounded-md text-sm font-medium bg-gray-200 text-gray-700`}
                onClick={handlePrevPage}
                >
                Previous
                </button>
                <button
                    className={`          ${currentPage === pageCount ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300 bg-gray-200'} mx-1 px-3 py-1 rounded-md text-sm font-medium`}
                    onClick={handleNextPage}
                    disabled={currentPage === pageCount}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
)
}

export default Browse
                        