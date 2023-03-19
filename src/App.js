import Header from './components/Header.js';
import Subtitle from './components/Subtitle.js';
import Home from './pages/Home.js';
import Personal from './pages/Personal.js';
import Collab from './pages/Collab.js';
import Regain from './pages/projects/Regain.js';
import InOuterSpace from './pages/projects/InOuterSpace.js';
import Esmod from './pages/projects/Esmod.js';
import SekarJagad from './pages/projects/SekarJagad.js';
import DarkRomance from './pages/projects/DarkRomance.js';
import RDxCM from './pages/projects/RDxCM.js';
import LondonC from './pages/projects/LondonC.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import './styles/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path ='/' element={<Home />}/>
          <Route path ='/personal' element={<Personal />}/>
          <Route path ='/collaboration' element={<Collab />}/>
          <Route path ='/regain' element={<Regain />}/>
          <Route path ='/in-outer-space' element={<InOuterSpace />}/>
          <Route path ='/esmod' element={<Esmod />}/>
          <Route path ='/sekar-jagad' element={<SekarJagad />}/>
          <Route path ='/dark-romance' element={<DarkRomance />}/>
          <Route path ='/roger-danuarta-x-cut-meyriska' element={<RDxCM />}/>
          <Route path ='/london-college-of-fashion-ma-project' element={<LondonC />}/>
          <Route path ='/contact' element={<Contact />}/>
          <Route path ='/about' element={<About />}/>
        </Routes>
      </Router>
      <Subtitle />
    </div>
  );
}

export default App;
