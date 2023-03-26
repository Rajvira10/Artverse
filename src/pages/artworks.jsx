import React, { useState } from 'react'

const Artworks = () => {
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
      tags: ['still life', 'watercolor painting','landscape']
    },
    // additional artworks here...
  ])


  const [filter, setFilter] = useState('')
  const [filteredArtworks, setFilteredArtworks] = useState(artworks)


  return (
    <div className='flex flex-wrap'>{filteredArtworks.map((artworks)=>(
      <div className='text-black m-5'>
        <h1>{artworks.title}</h1>
        <h2>{artworks.artist}</h2>
        <img src={artworks.image} alt={artworks.title}/>
        <p>{artworks.price}</p>
        <p>{artworks.likes}</p>
        <p>{artworks.tags} </p>
      </div>
    ))}</div>
  )
}

export default Artworks