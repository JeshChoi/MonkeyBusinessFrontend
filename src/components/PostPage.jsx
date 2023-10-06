import React from 'react';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";
import useApi from '../api/useApi';
import MakeComment from './MakeComment';
import { Separator } from "@/components/ui/separator"

const PostPage = () => {
    const authToken = Cookies.get("authToken");
    const username = Cookies.get("username");
    let { postId } = useParams();
    const {data, loading} = useApi(`http://localhost:6969/posts/${postId}`, authToken);
    const {data: commentsData, loading: commentsLoading} = useApi(`http://localhost:6969/posts/${postId}/comments`, authToken);

    if (loading) return <h1 className="text-3xl font-semibold text-center mt-20">Loading...</h1>;

    const post = data['post'];
    const { author, content, likes, title } = post;

    return (
      <div className="min-h-screen  flex justify-center ">
    <div className="w-[70%] flex text-left bg-white shadow-md rounded-md overflow-hidden">
        {/* Main Content */}
        <div className="p-6 overflow-auto w-full">
            <h1 className="text-3xl font-semibold mb-4">{title}</h1>
            <div className="mb-4 text-gray-700">
                <p>{content}</p>
                <p className="mt-4 text-sm text-gray-500">Posted by {author}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">Likes: {likes.length}</div>
                <div className="text-sm text-gray-500">Comments: {commentsData ? commentsData['post_comments'].length : 0}</div>
            </div>
            <div className="mt-6  rounded-md">
                <MakeComment postId={postId} commenterId={username} onCommentSubmit ={()=>{}}/>
                <Separator className="my-4" />
                <h2 className="text-xl font-semibold mb-2">Comments</h2>
                {commentsLoading ? (
                    <h1 className="text-3xl font-semibold text-center mt-20">Loading...</h1>
                ) : commentsData && commentsData['post_comments'].length > 0 ? (
                    commentsData['post_comments'].map(comment => (
                        <div key={comment.id} className="mb-2 p-2 border rounded-md">
                            <p className="text-gray-700">{comment.content}</p>
                            <p className="text-xs text-gray-500">{comment.author}</p>
                        </div>
                    ))
                ) : (
                    <h1>lol no comments nerd</h1>
                )}
            </div>
        </div>
    </div>
</div>

    );
}

export default PostPage;
