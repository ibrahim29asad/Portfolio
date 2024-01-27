import logo from './logo.svg';
import './App.css';
import Header from './Header';
import background from "../src/images/back.jpg";
import { LinearGradient } from 'react-text-gradients';

import Home from './Home';
import AboutMe from './AboutMe';
import SkillSetTools from './SkillSetTools';

//Skills
import { SiCplusplus } from "react-icons/si"; // C++
import { SiC } from "react-icons/si"; // C
import { SiSwift } from "react-icons/si"; //Swift
import { FaJava } from "react-icons/fa6"; // Java
import { SiPython } from "react-icons/si"; // Python
import { FaSquareGit } from "react-icons/fa6"; // Git
import { SiJavascript } from "react-icons/si"; // JavaScript
import { FaReact } from "react-icons/fa"; // React maybe rotate it 
import { SiCsswizardry } from "react-icons/si"; // CSS
import { FaHtml5 } from "react-icons/fa"; // HTML
import { SiAssemblyscript } from "react-icons/si"; // Assembly
import { SiYaml } from "react-icons/si"; // YAML
import { SiAzurepipelines } from "react-icons/si"; // Pipeline
import { FaDocker } from "react-icons/fa6"; // Docker
import { PiFileSqlDuotone } from "react-icons/pi"; // NoSQL
import { SiMysql } from "react-icons/si"; // MySQL
import { BiLogoFlask } from "react-icons/bi"; // Flask
import { VscAzureDevops } from "react-icons/vsc"; // Azure Devops
import { PiLinuxLogoFill } from "react-icons/pi"; // Linux
import { FaWindows } from "react-icons/fa6"; // Windows


import { FaSquareGithub } from "react-icons/fa6"; // Git Hub
import { TbBrandVscode } from "react-icons/tb"; // VS Code
import { RiMacbookLine } from "react-icons/ri"; // Macbook Pro
import { PiDeviceTabletCameraDuotone } from "react-icons/pi"; // IPad
import { TbDeviceAirpodsCase } from "react-icons/tb"; // AirPods Pro
import { SiJupyter } from "react-icons/si"; // Jupyter Notebook


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
