import React, { useState, useEffect } from "react";
import NavBar from "../navBar/navBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePost() {
   const navigate = useNavigate();
   const [values, setValues] = useState({
      title: "",
      content: "",
      image_url: "",
      username: "",
      created_at: "",
   });
   useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
         setValues((prev) => ({
            ...prev,
            username: storedUsername,
         }));
      }
   }, []);
   const handleSubmit = (event) => {
      event.preventDefault();

      axios
         .post("http://localhost:8081/create", values)
         .then((res) => {
            if (res.status === 200) {
               navigate("/main");
            } else {
               alert("No record existed");
            }
         })
         .catch((err) => console.log(err));
   };
   const handleInput = (event) => {
      setValues((prev) => ({
         ...prev,
         [event.target.name]: event.target.value,
      }));
      console.log(values);
   };
   return (
      <div className="bg-dark w-screen h-screen box-border ">
         <header>
            <NavBar />
         </header>
         <div className="flex justify-center items-center h-5/6 min-h-96 box-border  ">
            <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-10 justify-center items-center bg-slate-500 w-3/12 h-full max-h-96 rounded-xl shadow-2xl shadow-neutral-600 "
            >
               <div className="w-10/12">
                  <p className="text-white font-bold  m-0">Title</p>
                  <input
                     className="w-full h-10 rounded-3xl pl-4 box-border"
                     name="title"
                     type="text"
                     placeholder="Title"
                     onChange={handleInput}
                  />
               </div>
               <div className="w-10/12">
                  <p className="text-white font-bold  m-0">Content</p>
                  <input
                     className="w-full h-10 rounded-3xl pl-4 box-border"
                     name="content"
                     type="text"
                     placeholder="Content"
                     onChange={handleInput}
                  />
               </div>
               <div className="w-10/12">
                  <p className="text-white font-bold  m-0">Image URL</p>
                  <input
                     className="w-full h-10 rounded-3xl pl-4 box-border"
                     name="image_url"
                     type="text"
                     placeholder="Image Url"
                     onChange={handleInput}
                  />
               </div>
               <button
                  className=" w-40 h-10 bg-slate-500 border-2  text-white rounded-3xl shadow-lg shadow-indigo-500/40"
                  type="submit"
               >
                  Create post
               </button>
            </form>
         </div>
      </div>
   );
}

export default CreatePost;
