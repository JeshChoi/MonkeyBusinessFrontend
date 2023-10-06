import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const CreatePost = ({ show, setShow }) => {
  if (!show) return null;

  function refreshPage() {
    window.location.reload(false);
  }
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitle = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };
  const handleContent = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
  };
  const handlePostSubmission = () => {
    // submit post to db
    const url = "http://localhost:6969/posts/";
    const authToken = Cookies.get("authToken");
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${authToken}`,
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShow(false);
      });
      refreshPage()
  };

  return (
    <div className="fixed inset-0 p-4 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 md:w-2/3 lg:w-1/2">
        <h1 className="text-xl font-semibold mb-4">New Post</h1>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={handleTitle}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <textarea 
          placeholder="Write your message..." 
          value={content} 
          onChange={handleContent}
          className="w-full p-2 mb-4 h-40 border border-gray-300 rounded-lg resize-none"
        ></textarea>
        <div className="flex justify-end gap-4">
          <button 
            onClick={() => setShow(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg focus:outline-none"
          >
            Cancel
          </button>
          <button 
            onClick={handlePostSubmission}
            className="px-4 py-2 bg-yellow-400 text-white rounded-lg focus:outline-none"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
