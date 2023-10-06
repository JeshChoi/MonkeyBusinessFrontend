
import Post from './Post'
import { useEffect, useState } from 'react'
import Cookies from "js-cookie";

const PostsView = () => {
    const [posts, setPosts] = useState([])
    const callAPI = async () => {
        // submit post to db
        const url = "http://localhost:6969/posts/";
        const authToken = Cookies.get("authToken");
        const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${authToken}`,
            "Content-Type": "application/json;charset=UTF-8",
        },
        };

        fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
            console.log(posts);
        });
    }
    useEffect(()=> {
        callAPI();
    }, [])
  return (
    <div className='flex flex-col gap-3 overflow-auto h-[100vh]'>
        {
            posts.map((post) => {
                return (
                    <div key = {post.createdAt}>
                        <Post 
                        id = {post._id}
                        username = {post.author} 
                        likeCount = {post.likes.length}
                        commentCount = {post.comments.length}
                        title= {post.title}
                        content = {post.content}
                        createdAt={post.createdAt}/>
                    </div>
                    
                )    
            })
        }
    </div>
  )
}

export default PostsView