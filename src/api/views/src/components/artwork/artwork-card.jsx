import { useState } from 'react';
import ArtworkModal from './artwork-modal';
import Link from 'next/link';

const ArtworkCard = ({ artwork }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
        
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-64 object-cover"
          onClick={() => setShowModal(true)}
        />
        <div className="px-6 py-4">
          <Link href={`profile/${artwork.artist?._id}`} className='text-gray-700 text-base'>{artwork.artist?.username}</Link> <br />
          <Link href={`/artwork/${artwork._id}`} > <div className="font-bold text-xl mb-2 text-gray-700">{artwork.title}</div></Link>
          <p className="text-gray-700 text-base">{artwork.description}</p>
          <p className="text-gray-700 text-base mt-2">{`Price: $${artwork.price}`}</p>
          {
            artwork.tags?.map((tag) => (
              <Link
                href={`/discovery/tags/${tag.name}`}
                key={tag._id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-3"
              >
                #{tag.name}
              </Link>
            ))
          }
        </div>
      </div>
      {showModal && <ArtworkModal artwork={artwork} onClose={handleModalClose} />}
    </>
  );
};

export default ArtworkCard;
