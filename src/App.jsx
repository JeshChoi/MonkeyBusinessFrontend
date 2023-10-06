import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { NavLink, redirect, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { Button } from "@/components/ui/button";
import PostsView from "./components/PostsView";
import { Outlet } from "react-router-dom";


function App() {
  const username = Cookies.get("username");
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    console.log(username);
    if (typeof username === "undefined") {
      navigate("/login");
      return;
    }

  }, []);

  

  return (
    <div className="w-[100vw] h-[100vh] grid grid-cols-5 overflow-hidden">
      <NavBar />
      <div className="col-span-4 white p-10 h-[100vh] bg-slate-50">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
