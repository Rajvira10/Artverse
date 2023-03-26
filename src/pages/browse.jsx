import Navbar from 'components/Navbar';
import { useState } from 'react';
import ArtworkCard from '../../components/ArtworkCard';

const artworks = [
  {
    id: 1,
    title: 'Sunflower Fields',
    artist: 'John Smith',
    image: 'https://example.com/artwork-1.jpg',
    price: 1,
    likes: 10,
    tags: ['oil painting', 'landscape']
  },
  {
    id: 2,
    title: 'Abstract Sunset',
    artist: 'Jane Doe',
    image: 'https://example.com/artwork-2.jpg',
    price: 2,
    likes: 5,
    tags: ['abstract', 'acrylic painting']
  },
  {
    id: 1,
    title: 'Sunflower Fields',
    artist: 'John Smith',
    image: 'https://example.com/artwork-1.jpg',
    price: 3,
    likes: 10,
    tags: ['oil painting', 'landscape']
  },
  {
    id: 2,
    title: 'Abstract Sunset',
    artist: 'Jane Doe',
    image: 'https://example.com/artwork-2.jpg',
    price: 4,
    likes: 5,
    tags: ['abstract', 'acrylic painting']
  },
  {
    id: 1,
    title: 'Sunflower Fields',
    artist: 'John Smith',
    image: 'https://example.com/artwork-1.jpg',
    price: 5,
    likes: 10,
    tags: ['oil painting', 'landscape']
  },
  {
    id: 2,
    title: 'Abstract Sunset',
    artist: 'Jane Doe',
    image: 'https://example.com/artwork-2.jpg',
    price: 6,
    likes: 5,
    tags: ['abstract', 'acrylic painting']
  },
  {
    id: 1,
    title: 'Sunflower Fields',
    artist: 'John Smith',
    image: 'https://example.com/artwork-1.jpg',
    price: 7,
    likes: 10,
    tags: ['oil painting', 'landscape']
  },
  {
    id: 2,
    title: 'Abstract Sunset',
    artist: 'Jane Doe',
    image: 'https://example.com/artwork-2.jpg',
    price: 8,
    likes: 5,
    tags: ['abstract', 'acrylic painting']
  },
  {
    id: 1,
    title: 'Sunflower Fields',
    artist: 'John Smith',
    image: 'https://example.com/artwork-1.jpg',
    price: 9,
    likes: 10,
    tags: ['oil painting', 'landscape']
  },
  {
    id: 2,
    title: 'Abstract Sunset',
    artist: 'Jane Doe',
    image: 'https://example.com/artwork-2.jpg',
    price: 10,
    likes: 5,
    tags: ['abstract', 'acrylic painting']
  },
  {
    id: 1,
    title: 'Sunflower Fields',
    artist: 'John Smith',
    image: 'https://example.com/artwork-1.jpg',
    price: 11,
    likes: 10,
    tags: ['oil painting', 'landscape']
  },
  {
    id: 2,
    title: 'Abstract Sunset',
    artist: 'Jane Doe',
    image: 'https://example.com/artwork-2.jpg',
    price: 12,
    likes: 5,
    tags: ['abstract', 'acrylic painting']
  },
  {
    id: 2,
    title: 'Abstract Sunset',
    artist: 'Jane Doe',
    image: 'https://example.com/artwork-2.jpg',
    price: 13,
    likes: 5,
    tags: ['abstract', 'acrylic painting']
  },
  // add more artworks here...
];

const BrowseArtworks = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // const filteredArtworks = artworks.filter((artwork) => {
  //   if (selectedTags.length === 0) {
  //     return true;
  //   }
  //   return artwork.tags.some((tag) => selectedTags.includes(tag));
  // });

  const paginatedArtworks = artworks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageCount = Math.ceil(artworks.length / itemsPerPage);

  // const handleTagClick = (tag) => {
  //   if (selectedTags.includes(tag)) {
  //     setSelectedTags(selectedTags.filter((t) => t !== tag));
  //   } else {
  //     setSelectedTags([...selectedTags, tag]);
  //   }
  //   setCurrentPage(1);
  // };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log((currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage);
  };

  return (
    <>
<Navbar/>
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold mb-8">Browse Artworks</h1>
      {/* <div className="flex flex-wrap justify-between mb-4">
        {['oil painting', 'acrylic painting', 'abstract', 'landscape'].map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full text-sm font-medium mr-4 mb-4 ${
              selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {paginatedArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-full text-sm font-medium mr-2 ${
              currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default BrowseArtworks;
