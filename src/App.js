import './App.css';
import { Routes, Route } from 'react-router-dom';
import Summary from './components/Summary/Summary';
import MainStage from './components/Main/MainStage';
import AltCanvas from './components/Main/AltCanvas';
import Social from './components/Header/Social';
import { Portfolio } from './components/Summary/Portfolio';
import Resume from './components/Summary/Resume';
import FrameCycle from './components/Main/FrameCycle';
import NavBar from './components/Header/NavBar';

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
      <NavBar />
      <Routes>
        <Route path="/" element={<Summary />} />
        {/* <Route path="/projects" element={<MainPage />} /> */}
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/RJP-SWE-resume-2023.pdf" />
        <Route path="/projects3d" element={<MainStage />} />
        <Route path="/altCanvas" element={<AltCanvas />} />
        <Route path="/projects2d" element={<FrameCycle />} />
      </Routes>
      {/* <Footer /> */}
    </div>
    // </ParallaxProvider>
  );
}

export default App;
