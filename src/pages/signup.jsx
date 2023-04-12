import { useState,useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { LoginContext } from "../contexts/LoginContext";
import Link from 'next/link';

export default function Signup() {
  const router = useRouter();
  const { setUser, setUserId } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/api/users/auth/register', { username, email, password }); // Assuming you have a signup API route to register the user
      localStorage.setItem("accessToken",res.data.token);
      setUser(res.data.user.username);
      setUserId(res.data.user._id)  
      router.push('/profile'); // Redirect to profile page if signup is successful
    } catch (error) {
      console.log(error);
      setError('Failed to signup. Please try again.');
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto my-16 px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Sign Up</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className=' align-baseline text-sm text-indigo-500 hover:text-indigo-800 flex items-center justify-between mt-5'>
            <p className='text-black'>Already have an account?</p>
            <Link href="/login" className='underline font-bold'>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
