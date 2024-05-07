import React, { useState } from "react";
import NavBar from "../navBar/navBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePost() {
   const navigate = useNavigate();
   const [values, setValues] = useState({
      title: "",
      content: "",
      image_url: "",
   });
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
      <div className="bg-dark w-full h-full   box-border">
         <header>
            <NavBar />
         </header>
         <div className="flex justify-center justify-items-center ">
            <h1 className=" c-white">Welcome to create page</h1>
            <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-10 bg-slate-400"
            >
               <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  onChange={handleInput}
               />
               <input
                  name="content"
                  type="text"
                  placeholder="Content"
                  onChange={handleInput}
               />
               <input
                  name="image_url"
                  type="text"
                  placeholder="Image Url"
                  onChange={handleInput}
               />
               <button type="submit"> Create post</button>
            </form>
         </div>
      </div>
   );
}

export default CreatePost;
