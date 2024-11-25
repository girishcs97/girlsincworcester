import './App.css';
import Header from './components/header/header.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home.jsx'
import WhoweAre from './components/whowearepage/whowearepage.jsx';
import FooterComponent from './components/footer/footer.jsx';
import Whatwedo from './components/whatwedopage/whatwedo.jsx';
import Outcome from './components/outcome/outcome.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoweare" element={<WhoweAre />} />
          <Route path="/whatwedo" element={<Whatwedo />} />
          <Route path="/outcomes" element={<Outcome />} />
          <Route path="/getinvolved" element={<Outcome />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
