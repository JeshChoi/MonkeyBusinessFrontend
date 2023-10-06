import { NavLink, redirect, Navigate, useNavigate } from "react-router-dom";
import CreatePost from "./CreatePost";
import { useState } from "react";
const NavBar = () => {
  const [showCreatePost, setCreatePost] = useState(false);
  const handleCreate = (show) => {
    setCreatePost(show);
  };
  return (
    <div className="col-span-1 h-[100vh] flex flex-col justify-between p-10 border border-right-black">
      <div className="flex flex-col text-xl font-bold items-start gap-5">
        <div >
          <NavLink to="/" className="flex flex-row gap-3 text-2xl mb-4">
            <img className="h-11" src="/bana.png"></img>monkeh.
          </NavLink>
        </div>
        <div className="hover:bg-[#ffe135] w-[110%] rounded-lg p-3">
          <NavLink to="/" className="flex flex-row gap-3">
            <img className="h-7" src="/home.svg"></img>Home
          </NavLink>
        </div>
        <div onClick={handleCreate} className="hover:bg-[#ffe135] w-[110%] rounded-lg p-3">
          <button  className="flex flex-row gap-3">
            <img className="h-7" src="/add.svg"></img>Create
          </button>
        </div>
        <div className="hover:bg-[#ffe135] w-[110%] rounded-lg p-3">
          <button className="flex flex-row gap-3">
            <img className="h-7" src="/search.svg"></img>Search
          </button>
        </div>
        <div className="hover:bg-[#ffe135] w-[100%] rounded-lg p-3">
          <button to="/profile" className="flex flex-row gap-3">
            <img className="h-7" src="/user.svg"></img>Profile
          </button>
        </div>
        <div className=" w-[100%] rounded-lg p-3">
          <CreatePost show={showCreatePost} setShow={setCreatePost} />
        </div>
      </div>
      <div className="hover:bg-[#ffe135] w-[100%] rounded-lg p-3">
        <button className="flex flex-row gap-3 text-xl font-bold">
          <img className="h-7" src="/menu-burger.svg"></img>More
        </button>
      </div>
    </div>
  );
};

export default NavBar;
