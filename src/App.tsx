import './App.css';
import { Routes, Route } from 'react-router';
import Navbar from './components/shared/navbar';
import Roadmaps from './pages/roadmaps';
import KoorRoadmap from './components/roadmaps/koor-roadmap';
import PengurusRoadmap from './components/roadmaps/pengurus-roadmap';

function App() {
  return (
    <>
      <Navbar />
      <div className='fixed inset-0 pattern'></div>
      <div className='max-w-4xl mx-auto p-4 pt-20'>
        <Routes>
          <Route path='/roadmap' element={<Roadmaps />} />
          <Route path='/roadmap/pengurus' element={<PengurusRoadmap />} />
          <Route path='/roadmap/koordinator' element={<KoorRoadmap />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
