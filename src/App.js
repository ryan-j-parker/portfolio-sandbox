import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Experience from './Experience';
// import AltEffects from './AltEffects';
import Sandbox from './Sandbox';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sandbox />} />
      <Route path="/exp" element={<Experience />} />
      {/* <Route path="/alt" element={<AltEffects />} /> */}
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
