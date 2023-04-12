import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import Link from 'next/link';
import { LoginContext } from '../../contexts/LoginContext';

const ArtworkPage = () => {
    const router = useRouter()
    const { userId } = useContext(LoginContext);
    const {
        asPath
      } = useRouter();
    const [artwork, setArtwork] = useState("")
    const [averageRating, setAverageRating] = useState(0)
    const id = asPath.split("/")[2]
    useEffect(() => {
        if(id!=":id"){
          const fetchArtwork = async () => {
            try {
              const res = await axios.get(`http://localhost:3001/api/artworks/artwork/${id}`); 
              setArtwork(res.data.artwork);
              setAverageRating(res.data.averageRating);
            } catch (error) {
              console.log(error);
            }
          };
          fetchArtwork();
        }

      }, [id]);
      const deleteArtwork = () => {
        const token = localStorage.getItem("accessToken")
        if(!token){
          router.push('/login')
        }
        axios.delete(`http://localhost:3001/api/artworks/artwork/${id}`)
        .then(res => {
          router.push('/profile')
        })
        .catch(err => {
          console.log(err);
        })
      }
      const savetoFavorites = () => {
        if(userId){
          axios.post(`http://localhost:3001/api/users/${userId}/favorites`,{
            artworkId: id
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
        }

      }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='mt-5'></div>
      {
        userId === artwork.artist?._id &&<div className='flex'><Link href={`/artwork/edit/${id}`} className='bg-white rounded px-5 py-2 text-black mr-5'>Edit</Link ><div onClick={deleteArtwork} className='bg-white rounded px-5 py-2 text-black'>Delete</div></div> 
      }
      
      <div className="flex flex-col md:flex-row justify-between items-center my-8">
        <h1 className="text-3xl font-bold text-gray-100">{artwork.title}</h1>
        <Link href={`/profile/${artwork.artist?.username}`} className="text-lg font-bold  text-gray-200">{artwork.artist?.username}</Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img className="w-full h-auto rounded-lg shadow-lg" src={artwork.image} alt={artwork.title} />
        </div>
        <div className="w-full md:w-1/2 px-4 py-2">
          <div className="text-lg font-bold text-gray-100 mb-2">Description:</div>
          <div className="text-gray-200 leading-relaxed mb-4">{artwork.description}</div>
          <div className="text-lg font-bold text-gray-100 mb-2">Categories:</div>
          <div className="text-gray-200 leading-relaxed mb-4">{artwork.categories?.name?.join(', ')}</div>
          <div className="text-lg font-bold text-gray-100 mb-2">Tags:</div>
          <div className="text-gray-200 leading-relaxed mb-4">{artwork.tags?.name?.join(', ')}</div>
          <div className="text-lg font-bold text-gray-100 mb-2">Collections:</div>
          <div className="text-gray-200 leading-relaxed mb-4">{artwork.collections?.name?.join(', ')}</div>
          <div className="text-lg font-bold text-gray-100 mb-2">Price:</div>
          <div className="text-gray-200 leading-relaxed mb-4">${artwork.price}</div>
        </div>
      </div>
      <button className='bg-white rounded px-4 py-2 text-black' onClick={savetoFavorites}>Save to Favorites</button>
      <div className="my-8">
        <div className='flex justify-between items-center'>
          <div className="text-lg font-bold text-gray-100 mb-2">Feedback:</div>
          <div className="text-lg font-bold text-gray-100 mb-2">Average Rating: {averageRating}</div>
        </div>

        {artwork.feedback?.map((item, index) => (
          <div className="flex flex-col md:flex-row justify-between items-center mb-4" key={index}>
            <div className="text-gray-200 leading-relaxed mr-4">{item.comment} - <Link href={`/profile/${item.user}`} className="text-sm text-blue-400">{item.user?.username}</Link>    </div>
            <div className="flex items-center">
              <div className="text-gray-200 leading-relaxed mr-2">{item.rating}</div>
              <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L6.179 6.26 0 7.224l4.674 4.542-1.39 6.113L10 16.256l6.716 2.624-1.39-6.113L20 7.224l-6.179-0.964L10 0z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkPage;
