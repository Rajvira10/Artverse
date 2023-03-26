const ArtworkCard = ({ artwork }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-1">
      <img src={artwork.image} alt={artwork.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{artwork.title}</h2>
        <p className="text-gray-700 text-sm mb-1">{artwork.artist}</p>
        <p className="text-gray-700 text-lg font-bold mb-2">${artwork.price}</p>
        <div className="flex flex-wrap mt-4">
          {artwork.tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Add to Cart
          </button>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-1-1V9H6a1 1 0 01-.98-1.204l1-5A1 1 0 017 2h6a1 1 0 01.98.796l1 5A1 1 0 0114 9h-3v8a1 1 0 01-1 1zm-3-9h6v8h-2v-6a1 1 0 00-1-1H8a1 1 0 00-1 1v6H7V9.414l.293-.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 011.414 0l.293.293V17h-2v-6a1 1 0 00-1-1H7a1 1 0 00-1 1v6H6v-8z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-600 text-sm">{artwork.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
