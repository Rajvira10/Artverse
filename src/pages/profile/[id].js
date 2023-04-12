import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from "../../contexts/LoginContext";
import Portfolio from '../../components/portfolio';
import { useRouter } from "next/router";

export default function Profile2() {
  const [error, setError] = useState('');
  const { userId, setUser } = useContext(LoginContext);
  const [ profileuser, setProfileuser] = useState({})
  const {
    asPath
  } = useRouter();

  console.log()
  const id = asPath.split("/")[2]
  useEffect(() => {

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/users/${id}`); // Assuming you have an API route to get the authenticated user
        setProfileuser(res.data);
        setError("")
        setUser(res.data.username)
      } catch (error) {
        console.log(error);
        setError('Failed to fetch user data. Please try again.');
      }
    };
    fetchUser();
  }, [userId]);

  if (!profileuser) {
    return (
      <div>
        <div className="max-w-md mx-auto my-16 px-4 py-8 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Loading...</h1>
        </div>
      </div>
    );
  }
  const addFollowing = () => {
    if(userId){
      axios.post(`http://localhost:3001/api/users/${userId}/following`,{
        followingId: id
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
    <div>
      <div className=" mx-auto my-16 px-4 py-8 bg-white shadow-md rounded-lg">
        <div className='flex justify-between items-center mb-6'>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <button className='text-gray-100 bg-blue-800 rounded px-4 py-2 ' onClick={addFollowing}>Follow</button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {profileuser && <div className='text-black'> <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <p>{profileuser.username}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <p>{profileuser.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="portfolio">
            Portfolio
          </label>
          <Portfolio artworks={profileuser.artworks}/>
        </div> </div>}
      </div>
    </div>
  );
}
