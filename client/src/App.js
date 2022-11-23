import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutBlurb from './components/AboutBlurb';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { useNavigate, Link, Route, Routes } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return( 
    <>
    <nav>
    <ul>
        <button onClick={() => {navigate("/login");}}> Login </button>
        <button onClick={() => {navigate("/signup");}}> Sign Up </button>
    </ul>
    </nav>
    <div className="App">
      <Banner />
      <Navbar />
      <AboutBlurb />
    </div>
    <Routes>
      <Route path="/login" element={<Login />}  />
      <Route path="/signup" element={<SignUp />}  />
    </Routes>
    </>

    
  )
}

export default App;
