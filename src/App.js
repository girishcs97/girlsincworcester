import './App.css';
import Header from './components/header/header.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './home.jsx'
import WhoweAre from './components/whowearepage/whowearepage.jsx';
import FooterComponent from './components/footer/footer.jsx';
import Whatwedo from './components/whatwedopage/whatwedo.jsx';
import Outcome from './components/outcome/outcome.jsx';
import Alumnae from './components/alumnae/alumnae.jsx';
import GetInvolved from './components/getinvolved/getinvolved.jsx';
import OurHistory from './components/ourhistory/ourhistory.jsx';
import OurBillofRights from './components/ourbillofrights/ourbillofrights.jsx';
import OurFinancials from './components/ourfinancials/ourfinancials.jsx';
import OurChampions from './components/ourchampions/ourchampions.jsx';
import ResearchData from './components/researchdata/researchdata.jsx';
import ImpactStories from './components/impactstories/impactstories.jsx';

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
          <Route path="/alumnae" element={<Alumnae />} />
          <Route path="/researchdata" element={<ResearchData />} />
          <Route path="/impactstories" element={<ImpactStories />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/history" element={<OurHistory />} />
          <Route path="/billofrights" element={<OurBillofRights />} />
          <Route path="/financials" element={<OurFinancials />} />
          <Route path="/champions" element={<OurChampions />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
