import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { LoginContext } from "../contexts/LoginContext";
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const { setUser, setUserId } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/api/users/auth/login', { email, password }); // Assuming you have a login API route to authenticate the user
      const token = res.data.token;
      localStorage.setItem("accessToken", token);
      setUser(res.data.user.username);
      setUserId(res.data.user._id)  
      router.push('/profile'); // Redirect to profile page if login is successful

    } catch (error) {
      console.log(error);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto my-16 px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
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
              Login
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div className=' align-baseline text-sm text-indigo-500 hover:text-indigo-800 flex items-center justify-between mt-5'>
            <p className='text-black'>New Here?</p>
            <Link href="/signup" className='underline font-bold'>Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
