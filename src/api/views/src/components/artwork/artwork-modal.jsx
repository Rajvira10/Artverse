import Link from "next/link";

const ArtworkModal = ({ artwork, onClose }) => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 transition-opacity"
            aria-hidden="true"
            onClick={onClose}
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <Link href={`/artwork/${artwork._id}`} className="text-lg leading-6 font-medium text-gray-900 mb-4">
                    {artwork.title}
                  </Link>
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-contain"
                  />
                  <p className="text-gray-700 text-base mt-4">{artwork.description}</p>
                  {
            artwork.tags?.map((tag) => (
              <span
                key={tag._id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-3"
              >
                #{tag.name}
              </span>
            ))
          }
                  <p className="text-gray-700 text-base mt-2">{`Price: $${artwork.price}`}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-between items-center">
            <Link href={`profile/${artwork.artist?._id}`} className='text-gray-700 font-bold'>{artwork.artist?.username}</Link>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ArtworkModal;
  