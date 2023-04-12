import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { LoginContext } from "../contexts/LoginContext";

export default function Header() {
 
  const { setUser, setUserId, user, userId } = useContext(LoginContext);
  const [toggle, setToggle] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios
        .get(`http://localhost:3001/api/users/auth/auth`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user.name);
          setUserId(res.data.user._id);
          setToggle("Yes");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      setUser(null);
      setUserId(null);
      setToggle("");
    }
  }, [toggle,user,userId]);


  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="font-bold text-lg text-indigo-600">ArtGallery</div>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/artwork">
              <div className="text-gray-700 hover:text-gray-900 ml-8 mr-4">Upload</div>
            </Link>
            <Link href="/discovery">
              <div className="text-gray-700 hover:text-gray-900 mr-4">Discover</div>
            </Link>
            <Link href="/community">
              <div className="text-gray-700 hover:text-gray-900">Community</div>
            </Link>
          </div>
          <div className="flex items-center">
            {!toggle ? (<Link href="/login">
              <div className="text-gray-700 hover:text-gray-900 mr-4">Login</div>
            </Link>):(
            <Link href="/profile">
              <div className="text-gray-700 hover:text-gray-900">My Profile</div>
            </Link>)}
          </div>
        </nav>
      </div>
    </header>
  );
}
