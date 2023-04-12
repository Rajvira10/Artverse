import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from "../../contexts/LoginContext";
import Portfolio from '../../components/portfolio';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Profile() {
  const [error, setError] = useState('');
  const { user, userId, setUser } = useContext(LoginContext);
  const [ profileuser, setProfileuser] = useState({})
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("accessToken");
    router.push("/")
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/users/${userId}`); // Assuming you have an API route to get the authenticated user
        setProfileuser(res.data);
        setError("")
        setUser(res.data.username)
        console.log(res.data);
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

  return (
    <div>
      <div className="mx-auto my-16 px-4 py-8 bg-white shadow-md rounded-lg">
        <div className='flex justify-between items-center mb-6'>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <button onClick={()=>logout()} className='text-gray-100 bg-blue-800 rounded px-4 py-2 '>Logout</button>
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
        <div className="mb-4 bg-black px-4 py-2 cursor-pointer text-white">
          <Link href="/profile/favorites">Check Your Favorites</Link>
          </div>
          <div className="mb-4 bg-black px-4 py-2 cursor-pointer text-white">
          <Link href="/profile/following">Following</Link>
          </div>
          <div className="mb-4 bg-black px-4 py-2 cursor-pointer text-white">
          <Link href="/profile/followers">Followers</Link>
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="portfolio">
          </label>
          <Portfolio artworks={profileuser.artworks}/>
        </div> </div>}
      </div>
    </div>
  );
}
