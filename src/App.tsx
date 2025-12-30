import './App.css';
import KoorRoadmap from './components/roadmaps/koor-roadmap';
import { Routes, Route } from 'react-router';
import Navbar from './components/shared/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='fixed inset-0 pattern'></div>
      <Routes>
        <Route path='/roadmap/koordinator' element={<KoorRoadmap />} />
      </Routes>
    </>
  );
}

export default App;
