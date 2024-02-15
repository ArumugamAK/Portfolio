import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { IoLogoHtml5 } from 'react-icons/io';
import { SiCss3 } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaJava } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { IoLogoPython } from 'react-icons/io';
import { SiBootstrap } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';
import { FaGitAlt } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiFirebase } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <section id='Skills' className='bg-primary py-10'>
     <div className="flex flex-col px-7 py-4 items-center ">
                <h1 className="border-b-4 border-secondary mb-1 w-[280px] font-bold text-4xl text-white text-center">Skills & Abilities</h1>
                {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
        </div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col justify-start items-start gap-8">
            <div className="text-left">
              {/* <h3 className="text-white font-bold mb-4 text-2xl">Devops :</h3>
               */}
        <h3 className="text-white font-bold mb-4 text-2xl">Devops :</h3>



              <div className="flex flex-wrap items-center gap-4">
              {/* </div> */}
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <BsGithub size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2 font-bold">Github</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <FaGitAlt size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Git</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <SiNetlify size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Netlify</h4>
                  </div>
                  {/* <div className='flex flex-col items-center'> */}

                {/* Add more backend icons as needed */}
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold mb-4 text-2xl">Databases :</h3>
              <div className="flex flex-wrap items-center gap-4">
              {/* </div> */}
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <BiLogoMongodb size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">MongoDB</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <DiFirebase size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">FireBase</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <SiMysql size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Mysql</h4>
                  </div>
                  {/* <div className='flex flex-col items-center'> */}
                {/* Add more backend icons as needed */}
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold mb-4 text-2xl">Backend :</h3>
              <div className="flex flex-wrap items-center gap-4">
              {/* </div> */}
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <IoLogoNodejs size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Node.js</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <SiExpress size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Express.js</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <SiTypescript size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">TypeScript</h4>
                  </div>
                  {/* <div className='flex flex-col items-center'> */}
                {/* Add more backend icons as needed */}
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold mb-4 text-2xl">Programming Languages :</h3>
              <div className="flex flex-wrap items-center gap-4">
              {/* </div> */}
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <BsPatchCheckFill size="1.9em" color='#0EEA11'/>
                  </div>
                  <h4 className="text-white mt-2  font-bold ">C</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                </div>
                <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <FaJava size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2 text-1xl font-bold">Java</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <IoLogoPython size="1.9em" color='#0EEA11'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Python</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <IoLogoJavascript size="1.9em" color='violet'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Js</h4>
                  </div>
                  {/* <div className='flex flex-col items-center'> */}
                
                {/* Add more backend icons as needed */}
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold mb-4 text-2xl">Frontend :</h3>
              <div className="flex flex-wrap items-center gap-4">
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <IoLogoHtml5 size="1.9em" color='#000000'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">HTML</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <SiCss3 size="1.9em" color='#0027ff'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">CSS</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <FaReact size="1.9em" color='#00A3FF'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">React</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <SiBootstrap size="1.9em" color='#00A3FF'/>
                </div>
                  <h4 className="text-white mt-2  font-bold">Bootstrap</h4>
                  </div>
                  <div className='flex flex-col items-center'>
                <div className="bg-secondary rounded-full p-5 flex flex-col items-center">
                  <IoLogoJavascript size="1.9em" color='violet'/>
                </div>
                  <h4 className="text-white mt-2 font-bold">Js</h4>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
