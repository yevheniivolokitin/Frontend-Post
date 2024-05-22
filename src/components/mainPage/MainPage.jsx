import React, { useEffect, useState } from "react";
import NavBar from "../navBar/navBar";
import Post from "../post/post";
import axios from "axios";

function MainPage() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      const token = localStorage.getItem("token"); // Получаем токен из localStorage

      // Если токен есть, добавляем его в заголовок запроса
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      axios
         .get("http://localhost:8081/main", { headers }) // Передаем заголовок с токеном
         .then((res) => {
            setPosts(res.data);
         })
         .catch((err) => {
            console.error("Ошибка при получении постов:", err);
         });
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
