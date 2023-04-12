import { useState, useEffect } from "react";
import ArtworkCard from "../../../components/artwork/artwork-card";
import Search from "../../../components/search";
import Recommendations from "../../../components/Recommendations";
import Favorites from "../../../components/favorites";
import axios from "axios";
import { useRouter } from "next/router";

const TagDiscovery = () => {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendedArtworks, setRecommendedArtworks] = useState([]);
  const [favoriteArtworks, setFavoriteArtworks] = useState([]);

  const {
    asPath
  } = useRouter();
  const id = asPath.split("/")[3]
  const type = id.replace("%20", " ")
  useEffect(() => {
    const fetchArtworks = async() => {
      const res = await axios.get(`http://localhost:3001/api/artworks/artworks/tags/${id}`);
      if(res){
        setArtworks(res.data);
      }

    }
  
    fetchArtworks()
  }, [id, artworks]);


  useEffect(() => {
    // fetch recommended artworks data from backend API here based on user preferences
    // set recommendedArtworks state with fetched data
  }, []);

  useEffect(() => {
    // fetch favorite artworks data from backend API here based on user preferences
    // set favoriteArtworks state with fetched data
  }, []);

  const handleSearch = (term) => {
    // update searchTerm state with search term entered by user
    setSearchTerm(term);
  };

  const filteredArtworks = artworks.filter((artwork) =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-100">
          Discover {type} Artworks
        </h1>
        <div className="mt-6">
          <Search onSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard key={artwork._id} artwork={artwork} />
          ))}
        </div>
        <div className="mt-6">
          <Recommendations artworks={recommendedArtworks} />
        </div>
        <div className="mt-6">
          <Favorites artworks={favoriteArtworks} />
        </div>
      </div>
    </>
  );
};

export default TagDiscovery;
