import React from "react";

function Post({ postInfo }) {
   const formattedCreatedAt = new Date(postInfo.created_at).toLocaleString();
   return (
      <div className=" rounded-3xl bg-slate-700 flex justify-center justify-items-center flex-col p-10 gap-1">
         <h1 className=" text-white m-0 text-2xl">{postInfo.username}</h1>
         <h1 className=" text-slate-500 m-0 text-xs">{formattedCreatedAt}</h1>
         <img
            className="w-12/12 bg-cover h-max"
            src={postInfo.image_url}
            alt=""
         />
         <h1 className=" text-white m-0 text-xl">{postInfo.title}</h1>
         <p className=" text-slate-300 m-0 text-base">{postInfo.content}</p>
      </div>
   );
}

export default Post;
