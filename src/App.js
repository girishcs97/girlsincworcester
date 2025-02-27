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
import Programs from './components/programs/programs.jsx';
import Events from './components/events/events.jsx';
import AdvocacyEducation from './components/advocacyEducation/advocacyEducation.jsx';
import Volunteer from './components/volunteer/volunteer.js';
import SocialMediaSection from './components/socialmedia/socialmedia.js';
import Makeagift from './components/makeagift/makeagift.jsx';
import ChampionsForGirls from './components/champion/champion.jsx';
import PartnershipPage from './components/partners/partners.jsx';
import Donate from './components/donate/donate.jsx';

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
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/advocacyEducation" element={<AdvocacyEducation />} />
          <Route path="/volunteers" element={<Volunteer />} />
          <Route path="/socialmedia" element={<SocialMediaSection />} />
          <Route path='/makeagift' element={<Makeagift />} />
          <Route path='/championspage' element={<ChampionsForGirls />} />
          <Route path='/becomeapartner' element={<PartnershipPage />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
