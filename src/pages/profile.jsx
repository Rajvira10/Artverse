import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

const dummyUserData = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  bio: "I'm an artist who loves to paint landscapes and seascapes.",
  portfolio: [
    {
      id: 1,
      title: "Sunset over the Ocean",
      imageUrl: "/images/artwork1.jpg",
      price: 200,
      description: "A beautiful painting of a sunset over the ocean.",
    },
    {
      id: 2,
      title: "Mountain Landscape",
      imageUrl: "/images/artwork2.jpg",
      price: 300,
      description: "A stunning painting of a mountain landscape.",
    },
    {
      id: 3,
      title: "City Skyline",
      imageUrl: "/images/artwork3.jpg",
      price: 150,
      description: "A colorful painting of a city skyline at night.",
    },
  ],
};

export default function ProfilePage() {
  // State to hold user data
  const [userData, setUserData] = useState(dummyUserData);

  return (
    <Layout>
      <Head>
        <title>My Profile - Art Gallery</title>
      </Head>
      <div className="bg-white shadow-sm rounded-lg px-4 py-5 sm:p-6">
        <h1 className="text-2xl font-bold mb-5">My Profile</h1>
        <Profile user={userData} />
      </div>
    </Layout>
  );
}
