import React from 'react';
import { LinearGradient } from 'react-text-gradients';
import { BiHome } from "react-icons/bi"; // Home
import { IoMdPerson } from "react-icons/io"; // About
import { FaMicrochip } from "react-icons/fa6"; // Skills
import { IoMdPaper } from "react-icons/io"; // Resume
import { IoShareSocialSharp } from "react-icons/io5"; // Socials
import { MdInsertPhoto } from "react-icons/md"; // postss


const Header = () => {

    
    return (
    <header>


  <button class="button" >    
  
  
  <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']} >
  <BiHome/>
    Home
  </LinearGradient>
  </button>
    |
  <button class="button" >    
  <IoMdPerson/>
  <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']}>
    About
  </LinearGradient>
  </button>
    |
  <button class="button" >    
  <FaMicrochip/>
  <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']}>
    Skills
  </LinearGradient>
  </button>
    |
  <button class="button" >    
  <IoMdPaper/>
  <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']}>
    Resume
  </LinearGradient>
  </button>
    |
  <button class="button" >    
  <IoShareSocialSharp/>
  <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']}>
    Socials
  </LinearGradient>
  </button>
  |
  <button class="button"  >    
  <MdInsertPhoto/>
  <LinearGradient gradient={['to right', '#0acdf0 ,#ffffff']}>
    Posts
  </LinearGradient>
  </button>



    </header>
    
  );
}

export default Header;