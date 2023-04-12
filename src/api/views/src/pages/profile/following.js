import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Following() {
    const router = useRouter()
    const [users, setUsers] = useState([]);
    const { userId } = useContext(LoginContext)
    useEffect(() => {
        if(userId){
            async function fetchUsers() {
                const response = await axios.get(`http://localhost:3001/api/users/${userId}/following`);
                setUsers(response.data);
              }
              fetchUsers();
        }

   
      }, [users,userId]);
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-4">Following</h1>
          <ul>
            {users.map((user) => (
              <div  key={user._id} className="mb-4">
                <Link href={`/profile/${user._id}`}>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{user.username}</h3>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      );
            

}
  