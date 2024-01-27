import React from 'react';
import { LinearGradient } from 'react-text-gradients';
import { BiHome } from "react-icons/bi"; // Home
import { IoMdPerson } from "react-icons/io"; // About
import { FaMicrochip } from "react-icons/fa6"; // Skills
import { IoMdPaper } from "react-icons/io"; // Resume
import { IoShareSocialSharp } from "react-icons/io5"; // Socials
import { MdInsertPhoto } from "react-icons/md"; // postss


const Header = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
    <header>


  <button class="button" onClick={() => scrollToSection('Home')}>      
  <BiHome/>
    Home
  </button>

    |
    <button class="button" onClick={() => scrollToSection('About')}>   
  <IoMdPerson/>
    About
  </button>
    |
    <button class="button" onClick={() => scrollToSection('Skills')}> 
  <FaMicrochip/>
    Skills
  </button>
    |

    <button class="button" onClick={() => scrollToSection('Social')}>   
  <IoShareSocialSharp/>
    Socials
  </button>
  |
  <button class="button" onClick={() => scrollToSection('Posts')}> 
  <MdInsertPhoto/>
    Posts
  </button>
   |
 <button class="button" >    
  <IoMdPaper/>
    Resume
  </button>


    </header>
    
  );
}

export default Header;