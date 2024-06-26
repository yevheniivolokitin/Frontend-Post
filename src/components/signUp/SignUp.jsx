import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../../Validation/SignUpValidation";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { usernameSave } from "../../redux/actions/usernameActions";
import { v4 as uuidv4 } from "uuid"; // Import UUID

function SignUp({ usernameSave }) {
   const navigate = useNavigate();
   const [errors, setErrors] = useState({});
   const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
   });

   const handleInput = (event) => {
      setValues((prev) => ({
         ...prev,
         [event.target.name]: event.target.value,
      }));
      console.log(values);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
      if (errors.name === "" && errors.email === "" && errors.password === "") {
         // Generate a unique ID
         const userId = uuidv4();

         // Add the generated ID to the values object
         const userValues = { ...values, user_id: userId };

         // Save username to local storage
         localStorage.setItem("username", values.name);

         // Dispatch usernameSave action
         usernameSave(values.name);

         axios
            .post("http://localhost:8081/signup", userValues)
            .then((res) => {
               navigate("/");
            })
            .catch((err) => console.log(err));
      }
   };

   return (
      <div className="flex justify-center items-center vh-100 bg-dark">
         <div className="bg-white p-3 rounded w-25 ">
            <h3 className="m-auto w-25">SignUp</h3>
            <form action="" onSubmit={handleSubmit}>
               <div className="mb-3">
                  <label>
                     <strong>Username</strong>
                  </label>
                  <input
                     type="name"
                     name="name"
                     placeholder="Enter username"
                     className="form-control rounded -0"
                     onChange={handleInput}
                  />
                  {errors.name && (
                     <span className="text-red-500">{errors.name}</span>
                  )}
               </div>
               <div className="mb-3">
                  <label>
                     <strong>Email</strong>
                  </label>
                  <input
                     type="email"
                     name="email"
                     placeholder="Enter email"
                     className="form-control rounded -0"
                     onChange={handleInput}
                  />
                  {errors.email && (
                     <span className="text-red-500">{errors.email}</span>
                  )}
               </div>
               <div className="mb-3">
                  <label>
                     <strong>Password</strong>
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="Enter password"
                     className="form-control rounded -0"
                     onChange={handleInput}
                  />
                  {errors.password && (
                     <span className="text-red-500">{errors.password}</span>
                  )}
               </div>
               <button type="submit" className="btn btn-success w-100">
                  Create account
               </button>
               <p></p>
               <Link to={"/"}>
                  <button className="btn btn-default border w-100 bg-light rounded-0">
                     You have account?
                  </button>
               </Link>
            </form>
         </div>
      </div>
   );
}

const mapDispatchToProps = {
   usernameSave, // Подключаем action creator к компоненту через mapDispatchToProps
};

export default connect(null, mapDispatchToProps)(SignUp);
