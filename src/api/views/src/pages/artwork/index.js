import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useRouter } from "next/router";
import axios from "axios";

export default function ArtworkUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [price,setPrice] = useState(0);


  const { userId } = useContext(LoginContext);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      router.push("/login");
    }
  }, [userId])
  

  const handleSubmit = async(event) => {
    event.preventDefault();
  
    // create artwork object to send to API
    const artwork = {
      title,
      description,
      image: URL.createObjectURL(imageFile),
      tags,
      price,
      artist: userId,
    };
    
    // send artwork to API using axios
    await axios.post("http://localhost:3001/api/artworks/artwork/", artwork)
    .then((res) => {
      router.push('/')
    })
    .catch((err) => {
      console.log(err);
    });

    

    // clear form inputs
    setTitle("");
    setDescription("");
    setImageFile(null);
    setTags([]);
    setPrice(0)
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleTagChange = (event) => {
    const selectedTags = Array.from(event.target.selectedOptions, (option) => option.value);
    setTags(selectedTags);
  };

  const availableTags = ["Landscape", "Portrait", "Abstract", "Realism", "Pop Art", "Impressionism"];

  return (
    <>
    <div className="text-center mt-6 text-2xl font-bold">  Upload Artwork</div>  
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto bg-gray-600 p-5 rounded my-10">
        
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-100 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          className="border-none outline-none rounded py-2 px-3 w-full text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="artist" className="block text-gray-100 font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          className="border-none outline-none rounded py-2 px-3 w-full text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-100 font-bold mb-2">
          Artwork
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="border rounded py-2 px-3 w-full "
        />
      </div>
      <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-00 font-bold mb-2">
            Tags
          </label>
          <select required multiple id="tags" name="tags" onChange={handleTagChange} className="border rounded py-2 px-3 w-full text-black">
            {availableTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
        <label htmlFor="artist" className="block text-gray-100 font-bold mb-2">
          Price ($)
        </label>
        <input
          type="number"
          id="description"
          name="description"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
          className="border-none outline-none rounded py-2 px-3 w-full text-black"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
    </form>
    </>
  );
}
