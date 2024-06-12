import { Route,Routes  } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar"
import Signup from './pages/Signup';
import OpenRoute from "./components/core/Auth/OpenRoute"
function App() {
  return (

    <div className='bg-richblack-900 w-90 min-h-screen flex flex-col'>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        
      </Routes>
    
    </div>
  );
}

export default App;
