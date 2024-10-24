import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import LandingPage from './components/landingpage/landingpage';
import Mission from './components/mission/mission';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Mission />
    </div>
  );
}

export default App;
