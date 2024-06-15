import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Lottie from 'react-lottie';
// import Loader from "./lottie/loader.json"
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { useEffect, useState } from "react";

function App() {
  // const defaultOptions={
  //   loop:true,
  //   autoplay:true,
  //   animationdata:Loader,
  //   rendererSetting:{
  //     PreserveAspectRatio:"xMidYMid slice"
  //   }
  // };
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-richblack-700 w-90 min-h-screen flex flex-col">
      {/* <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
