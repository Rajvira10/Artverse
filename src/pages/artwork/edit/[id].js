import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditArtwork = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    asPath
  } = useRouter();
  const router = useRouter();
  const id = asPath.split("/")[3]
  console.log(id);
  useEffect(() => {
    // fetch artwork information
    const fetchArtwork = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/artworks/artwork/${id}`); 
        setTitle(response.data.title);
        setDescription(response.data.description);
        setTags(response.data.tags);
        setPrice(response.data.price);
      } catch (error) {
        setErrorMsg('Error fetching artwork information');
      }
    };
    fetchArtwork();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const artwork = {
        title,
        description,
        tags: JSON.stringify(tags),
        price,
      };
    // send artwork to API using axios
    if(id!=":id"){
      try {
        const response = await axios.post(`http://localhost:3001/api/artworks/artwork/${id}`, artwork);
        router.push(`/artwork/${response.data._id}`);
      } catch (error) {
        setErrorMsg('Error updating artwork');
        setIsLoading(false);
      }
    }

  };


  const handleTagInputChange = (event) => {
    setTags(event.target.value.split(','));
  };

  return (
<div className="max-w-lg mx-auto">
  <h1 className="text-2xl font-bold mb-4">Edit Artwork</h1>
  {errorMsg && <p>{errorMsg}</p>}
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="title" className="block font-bold mb-2">Title:</label>
      <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} className="w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <div>
      <label htmlFor="description" className="block font-bold mb-2">Description:</label>
      <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} className="w-full px-4 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
    </div>
    <div>
      <label htmlFor="price" className="block font-bold mb-2">Price:</label>
      <input type="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} className="w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <div className="flex justify-end">
      <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50" disabled={isLoading}>Edit</button>
    </div>

  </form>
</div>
  );
};

export default EditArtwork;
