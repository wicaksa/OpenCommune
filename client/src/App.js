import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutBlurb from './components/AboutBlurb';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyNetworks from './pages/MyNetworks';
import ItemsInNetwork from './pages/ItemsInNetwork';
import AddItem from './components/AddItem';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import NavbarHomePage from './components/NavbarHomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const navigate = useNavigate();

  return( 
    <>
      <div className="App">
        <Banner />
        <NavbarHomePage/>
        <AboutBlurb />
      </div>
      <Routes>
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<SignUp />}  />
        <Route path="/mynetworks" element={<MyNetworks />} />
        <Route path="/itemsinnetwork" element={<ItemsInNetwork />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
    </>

    
  )
}

export default App;
