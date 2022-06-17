import Navbar from '../components/Navbar';
import Homepage from "./Homepage";
import Actualites from "./Actualites";
import Evenements from "./Evenements";
import Galerie from "./Galerie";
import Footer from '../components/Footer';
import '../style/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router >
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/actualites' element={<Actualites />}></Route>
          <Route path='/evenements' element={<Evenements />}></Route>
          <Route path='/galerie' element={<Galerie />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;