import React from "react";
import { Link } from "react-router-dom";
import { toBananaTalk } from "../monkey_talk";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Post = ({id, username, likeCount, commentCount, title, content, createdAt}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});
  return (
    <Link to={`/${id}`}>
    <div className="w-full md:w-[60vw] lg:w-2/3 h-auto p-5 flex flex-row items-start rounded-lg shadow-md bg-white border transition duration-200 hover:border-yellow-500">
      
      <div className="flex-shrink-0 flex flex-col text-left gap-2">
        <Avatar className="w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-1">
            <img className="h-6 w-6" src='/banana.png' alt='Banana' />
            <p>{commentCount}</p>
          </div>
          <div className="flex items-center gap-1">
            <img className="h-6 w-6" src='/comment.png' alt='Comment' />
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-grow ml-4 text-sm text-left">
        <div className="flex items-center space-x-1 mb-2 text-gray-700">
          <p>@{username}</p>
          <p>-</p>
          <p>{formattedDate}</p>
          <p>-</p>
          <p className="text-yellow-500">not following</p>
        </div>
        <h1 className="m-0 p-0 mb-2 font-medium text-xl text-gray-800">
          {toBananaTalk(title, "human")}
        </h1>
        <p className="m-0 p-0 text-gray-700 break-words">
          {toBananaTalk(
            content,
            "both"
          )}
        </p>
      </div>
      
    </div>
    </Link>
  );
};

export default Post;
