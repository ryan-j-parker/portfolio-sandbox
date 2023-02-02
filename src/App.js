import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Experience from './Experience';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Experience />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
