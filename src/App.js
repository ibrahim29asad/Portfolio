import logo from './logo.svg';
import './App.css';
import Header from './Header';
import background from "../src/images/back.jpg";
import { LinearGradient } from 'react-text-gradients';

import Home from './Home';
import AboutMe from './AboutMe';
import SkillSetTools from './SkillSetTools';
import Socials from './Socials';
import ImageGallery from './ImageGallery';
import GitHubCalendar from 'react-github-calendar';

function App() {

  return (

    
    <div className="App" style={{ backgroundImage: `url(${background})`
    , backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
    }}>

    <div className='Header-Style'>
      <Header/>  
    </div> 

    <section id="Home">
      <Home />
    </section>

    <section id="About">
      <AboutMe/>
    </section>

    <section id="Skills">
    <SkillSetTools/>
    </section>

    <section id="Social">
    <Socials/>
    </section>

    <section id="Posts">
  <div className='Posts-Text-header'>
    Posts: <br/> Photo Gallery:
  </div>
  <ImageGallery/>
  <div className='Posts-Text-header'>
    GitHub Contributions:
  </div>
  <div className='GitHub'>
    <GitHubCalendar username="ibrahim29asad" />

    </div>

    </section>

  
    

    <div className = "About-Text">
    <p>&nbsp;ibrahim asad, 2024 <br/>&nbsp;version 3, updated Feb 2024</p>  
    </div>
   
    
    </div>

    

 


  );
}

export default App;


          {/* 
          <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
     */}
