import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import { Page } from "./utilities/PageEnum";

const App = () => {
  const [currentPage, setCurrentPage] = useState(Page.Home);
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto_1fr] grid-cols-1 bg-gradient-to-br from-gray-300 via-zinc-300 to-slate-300">
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === Page.Home && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === Page.SingUp && (
        <SignUp setCurrentPage={setCurrentPage} />
      )}
      {currentPage === Page.AboutUs && <div>About Us</div>}
      {currentPage === Page.ContactUs && <div>Contact Us</div>}
      {currentPage === Page.Education && <div>Education</div>}
      {currentPage === Page.Login && <div>Login</div>}
      {currentPage === Page.UserProfile && <div>User Profile</div>}
    </div>
  );
};

export default App;
