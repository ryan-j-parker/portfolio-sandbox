import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Experience from './components/Sandbox/Experience';
import Sandbox from './components/Sandbox/Sandbox';
import { ImageSearch } from './components/Sandbox/ImageSearch';
import Profile from './components/Summary/Profile';
import Footer from './components/Header/Footer';
import Summary from './components/Summary/Summary';
import MainStage from './components/Main/MainStage';
import Social from './components/Header/Social';
import Navbar from './components/Header/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainPage from './components/Main/MainPage';
import { Portfolio } from './components/Summary/Portfolio';
import Resume from './components/Summary/Resume';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Sandbox />} />
    //   <Route path="/profile" element={<Profile />} />
    //   <Route path="/exp" element={<Experience />} />
    //   <Route path="/alt" element={<AltEffects />} />
    //   <Route path="/main" element={<Main />} />
    //   <Route path="/image" element={<ImageSearch />} />
    // <ParallaxProvider>
    <div className="App">
      <Social />/{/* <Profile /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Summary />} />
        {/* <Route path="/projects" element={<MainPage />} /> */}
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects3d" element={<MainStage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
    // </ParallaxProvider>
  );
}

export default App;
