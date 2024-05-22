// src/App.jsx
import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import MainPage from "./components/mainPage/MainPage";
import CreatePost from "./components/createPost/createPost";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"; // Убедись, что путь правильный и регистр совпадает

function App() {
   const isAuthenticated = !!localStorage.getItem("token"); // Проверка наличия токена в локальном хранилище

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route
                  path="/"
                  element={
                     isAuthenticated ? <Navigate to="/main" /> : <Login />
                  }
               />
               <Route
                  path="/SignUp"
                  element={
                     isAuthenticated ? <Navigate to="/main" /> : <SignUp />
                  }
               />
               <Route
                  path="/main"
                  element={
                     <ProtectedRoute>
                        <MainPage />
                     </ProtectedRoute>
                  }
               />
               <Route
                  path="/create"
                  element={
                     <ProtectedRoute>
                        <CreatePost />
                     </ProtectedRoute>
                  }
               />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
