import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Experience from './components/Sandbox/Experience';
import Sandbox from './components/Sandbox/Sandbox';
import { ImageSearch } from './components/Sandbox/ImageSearch';
import Profile from './components/Summary/Profile';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Sandbox />} />
    //   <Route path="/profile" element={<Profile />} />
    //   <Route path="/exp" element={<Experience />} />
    //   <Route path="/alt" element={<AltEffects />} />
    //   <Route path="/main" element={<Main />} />
    //   <Route path="/image" element={<ImageSearch />} />
    // </Routes>
    <Profile />
  );
}

export default App;
