import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../../Validation/LoginValidation";
import axios from "axios";

function Login() {
   const navigate = useNavigate();
   const [errors, setErrors] = useState({});
   const [values, setValues] = useState({
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
      if (errors.email === "" && errors.password === "") {
         axios
            .post("http://localhost:8081/login", values)
            .then((res) => {
               if (res.data === "Success") {
                  navigate("/main");
               } else {
                  alert("No record existed");
               }
            })
            .catch((err) => console.log(err));
      }
   };
   const handleKeyPress = (event) => {
      if (event.key === "Enter") {
         if (errors.email === "" && errors.password === "") {
            axios
               .post("http://localhost:8081/login", values)
               .then((res) => {
                  if (res.data === "Success") {
                     navigate("/main");
                  } else {
                     alert("No record existed");
                  }
               })
               .catch((err) => console.log(err));
         }
      }
   };

   return (
      <div className="flex justify-center items-center vh-100 bg-dark ">
         <div className="bg-white p-3 rounded w-25 ">
            <h3 className="m-auto w-20">Login</h3>
            <form action="" onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
               <div className="mb-3">
                  <label htmlFor="email">
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
                  <label htmlFor="password">
                     <strong>Password</strong>
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="Enter password"
                     className="form-control rounded -0 w"
                     onChange={handleInput}
                  />

                  {errors.password && (
                     <span className="text-red-500">{errors.password}</span>
                  )}
               </div>
               <button type="submit" className="btn btn-success w-100">
                  Log in
               </button>
               <p></p>
               <Link to={"/SignUp"}>
                  <button className="btn btn-default border w-100 bg-light rounded-0">
                     Create account
                  </button>
               </Link>
            </form>
         </div>
      </div>
   );
}

export default Login;
