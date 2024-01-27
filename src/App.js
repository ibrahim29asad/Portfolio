import logo from './logo.svg';
import './App.css';
import Header from './Header';
import background from "../src/images/back.jpg";
import ProfilePic from "../src/images/profile.jpg"
import { LinearGradient } from 'react-text-gradients';
import { TypeAnimation } from 'react-type-animation';




function App() {
  return (

    
    <div className="App" style={{ backgroundImage: `url(${background})`
    , backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
    }}>
<div className='Header-Style'>
    <Header/>  
    </div> 

  <div className='Home-Text'>
    Hey There ! &nbsp;
    <div className='wave'>
    😁 
    </div>
    <div className='wave'>
      👋   
    </div>
    <br/>
      I'm &nbsp;
    <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']} >
      Ibrahim
    </LinearGradient>


   

       
  
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
