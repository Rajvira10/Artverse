import '../styles/globals.css'
import Footer from "../components/footer"
import Header from "../components/header"
import { LoginContext } from "../contexts/LoginContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");
  return<LoginContext.Provider value ={{user, setUser, userId, setUserId}}><Header/><Component {...pageProps} /><Footer/></LoginContext.Provider>
}
