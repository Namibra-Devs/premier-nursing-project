import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Admissions from './Admissions';
import Events from './Events';
import Gallery from './Gallery';
import Programs from './Programs';
import News from './News';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admissions" element={<Admissions />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/News" element={<News />} />
          
        </Routes>
        <Link to="/Admissions" className='dropdown-item'></Link>
        <Link to="/Events" className=''></Link>
        <Link to="/Gallery" className='nav-item'></Link>
        <Link to="/Programs" className=''></Link>
        <Link to="/News" className=''></Link>
        <Link to="/" className=''></Link>

        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
