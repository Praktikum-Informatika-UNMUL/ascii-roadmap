import './App.css';
import { Route, Routes } from 'react-router';
import KoorRoadmap from './components/roadmaps/koor-roadmap';
import PengurusRoadmap from './components/roadmaps/pengurus-roadmap';
import Navbar from './components/shared/navbar';
import Home from './pages/home';
import Roadmaps from './pages/roadmaps';
import TemplateChat from './pages/template-chat';

function App() {
  return (
    <>
      <Navbar />
      <div className='fixed inset-0 pattern'></div>
      <div className='max-w-4xl mx-auto p-4 pt-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roadmap' element={<Roadmaps />} />
          <Route path='/roadmap/pengurus' element={<PengurusRoadmap />} />
          <Route path='/roadmap/koordinator' element={<KoorRoadmap />} />
          <Route path='/template-chat' element={<TemplateChat />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
