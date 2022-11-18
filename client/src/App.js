import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutBlurb from './components/AboutBlurb';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <AboutBlurb />
    </div>
  );
}

export default App;
