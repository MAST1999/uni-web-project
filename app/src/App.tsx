import { useState } from "react";
import "./App.css";
import { SignUpPage } from "./Components/SignUpPage";
import { Page } from "./utilities/PageEnum";

const App = () => {
  const [currentPage, setCurrentPage] = useState(Page.SingUp);
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {currentPage === Page.SingUp && (
        <SignUpPage setCurrentPage={setCurrentPage} />
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
