import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import MainPage from "./components/mainPage/MainPage";
import CreatePost from "./components/createPost/createPost";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />}></Route>
               <Route path="/main" element={<MainPage />}></Route>
               <Route path="/SignUp" element={<SignUp />}></Route>
               <Route path="/create" element={<CreatePost />}></Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
