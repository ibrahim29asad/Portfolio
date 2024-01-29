import React from 'react';
import './App.css';
import ProfilePic from "../src/images/profile.jpg"
import { LinearGradient } from 'react-text-gradients';
import Typewriter from "typewriter-effect";


const Home = () => {

    
    return (


      <div className='Home'>


    <div className='Home-image' >
  <img src={ProfilePic} className="Profile-Pic" alt="Profile" /> 
</div>

    <div className='Home-Text'>
      Hey There ! &nbsp;
      <div className='wave'>
      👋   
      </div>
      <br/>
        I'm&nbsp;
      <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']} >
        Ibrahim
        
      </LinearGradient>



  <div className='typewriter-text'>
      <Typewriter
    options={{
      strings: ['5th Year Student', 'Software Developer','Aspiring Software Engineer' ],
      autoStart: true,
      loop: true,
    }}
    style={{ color: '#0acdf0' }} 
  />

  </div>
  
  




    </div>



  </div>
    
  );
}

export default Home;

