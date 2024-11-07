import './App.css';
import Header from './components/header/header.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home.jsx'
import WhoweAre from './components/whowearepage/whowearepage.jsx';
import FooterComponent from './components/footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoweare" element={<WhoweAre />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
