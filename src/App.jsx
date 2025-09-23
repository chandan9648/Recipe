import React from "react";
import Nav from "./Components/Nav"; 
import MainRoutes from "./routes/Main.routes";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div className="w-screen h-screen  bg-rose-400 text-white ">
      <Nav />
      <MainRoutes />
      <ToastContainer />
      
    </div>
  );
};

export default App;
