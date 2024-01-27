import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6"; 
import { FaTiktok } from "react-icons/fa6"; 

const Socials = () => {


    return (
   
      <><div className='Social-Text-header'>
        Socials:
      </div><div className='SocialHeader-Style'>

          <a href="https://github.com/ibrahim29asad" className="button">
            <IoLogoGithub style={{ fontSize: '24px' }} />
          </a>


          <a href="https://www.linkedin.com/in/iibrahimasad/" className="button">
            <FaLinkedin style={{ fontSize: '30px' }} />
          </a>

          <a href="https://leetcode.com/user1833qc/" className="button">
            <SiLeetcode style={{ fontSize: '30px' }} />
          </a>


          <a href="https://www.instagram.com/ibrahim29asad/" className="button">
            <FaInstagram style={{ fontSize: '30px' }} />
          </a>

          <a href="https://www.tiktok.com/@ibby_asd?_t=8jJfNXcJmgn&_r=1" className="button">
            <FaTiktok style={{ fontSize: '30px' }} />
          </a>

        </div></>
    
  );
}

export default Socials;