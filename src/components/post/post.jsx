import React from "react";

function Post({ postInfo }) {
   return (
      <div className=" rounded-3xl bg-slate-700 flex justify-center justify-items-center flex-col p-10 ">
         <h1 className=" text-white m-0">{postInfo.username}</h1>
         <img className="w-2/3 h-60" src={postInfo.image_url} alt="" />
         <h1 className=" text-white m-0">{postInfo.title}</h1>
         <p className=" text-white m-0">{postInfo.content}</p>
      </div>
   );
}

export default Post;
