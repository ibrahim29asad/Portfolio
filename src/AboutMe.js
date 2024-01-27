import logo from './logo.svg';
import './App.css';
import Header from './Header';
import background from "../src/images/back.jpg";
import { LinearGradient } from 'react-text-gradients';

import Home from './Home';
import Raptors from "./images/Raptors.jpg";




const AboutMe = () => {
    
    return (

      <><div className='About-Text-header'>
        A Little About Myself 😁:
        <br />
        <div className='About-Text'>
          My name is Ibrahim Asad. <br /> <br />

          I am Studying at the University of Calgary as Fifth Year Student, while
          finishing a 16-month Internship. <br /> <br />

          I want to learn about all types of topics and love to challenge myself.
          My love to challenge myself and try again is why I chose to do
          my degree,
          <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']}>
            Software Engineering with a Minor in Biomedical
            Engineering. <br /> <br />
          </LinearGradient>

          I Love Sneakers and to explore and try new Cuisines and
          Restaurants as well as play Basketball, watch Anime’s, and
          reading Manga. My Favourite Team is the
          Toronto Raptors <br /> <br />

          My favourite Anime’s and Mangas are Naruto, Boruto, Dragon
          Ball Super, My Hero Academia, and Hunter x Hunter.

          However, if I’m not doing these things I love to play
          Mario Kart Online and hopefully I will finish Hogwarts Legacy
          one day 😅.<br /> <br />

          Coding has always interested me with the Idea of being able to
          remotely create anything with just a single computer, and try to
          use the inspiration I get from Sneakers to design things. <br /> <br />





        </div>

      </div>
      <div className='About-image' style={{ marginTop: '-45%' }}>
          <img src={Raptors} className="About-Pic" alt="Profile" />
        </div><
          div className='About-Text'>
          <br /> <br />
          <br /> <br />
        </div></>
    
  );
}

export default AboutMe;

