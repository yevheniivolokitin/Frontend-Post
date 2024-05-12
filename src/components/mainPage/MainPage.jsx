import React, { useEffect, useState } from "react";
import NavBar from "../navBar/navBar";
import Post from "../post/post";
import axios from "axios";

function MainPage() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      axios
         .get("http://localhost:8081/main")
         .then((res) => {
            console.log("Полученные посты:", res.data);
            setPosts(...posts, res.data);
         })
         .catch((err) => {
            console.error("Ошибка при получении постов:", err);
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div className="bg-dark w-full min-h-screen h-full  box-border">
         <header>
            <NavBar />
         </header>
         <div className="flex justify-center justify-items-center">
            <h1>Welcome to main page</h1>
         </div>
         <div className=" w-3/6 m-auto flex flex-col gap-10">
            {posts.map((post) => (
               <Post key={post.id} postInfo={post} />
            ))}
         </div>
      </div>
   );
}

export default MainPage;
