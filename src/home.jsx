import React from 'react';
import LandingPage from './components/landingpage/landingpage.jsx'
import Mission from './components/mission/mission.jsx'
import GetInvolved from './components/whowearepage/getinvolved.jsx';
import OutcomeSection from './components/landingpage/outcomesection.jsx';
import PartnersSection from './components/landingpage/partnersection.jsx';
import Ourstory from './components/landingpage/ourstory.jsx';

const Home = () => {
    return (
        <>
            <div className="App">
                <LandingPage />
                <Mission />
                <br/>
                <br/>
                <Ourstory />
                <OutcomeSection />
                <GetInvolved />
                <PartnersSection />
                
            </div>
        </>
    )
}
export default Home