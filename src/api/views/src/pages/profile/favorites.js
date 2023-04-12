import { useState, useEffect, useContext } from "react";
import ArtworkCard from "../../components/artwork/artwork-card";
import axios from "axios";
import { LoginContext } from "../../contexts/LoginContext";

const Favorites = () => {
  const [artworks, setArtworks] = useState([]);
const {userId} = useContext(LoginContext)
  useEffect(() => {
    
    fetchArtworks()
  }, []);

  const fetchArtworks = async() => {
    
    if(userId){
        console.log(userId)
        const res = await axios.get(`http://localhost:3001/api/users/${userId}/favorites`);
        setArtworks(res.data);
        console.log(res.data);
    }
  }

  return (
    <>
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-100">
          Your Favorites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
