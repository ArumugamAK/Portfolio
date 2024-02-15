import React from 'react'
import Heroimg from '../asserts/hero.png';
import { SiLeetcode } from "react-icons/si";
import { FaGithub,  TbBrandLeetcode,FaLinkedin  } from "react-icons/fa";
export const Hero = () => {

  return (
    <div className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center"id="home" >
        <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-hero-font"> Hi,<br/> Im <span className="text-black">AK</span> Arumugam
        <p className="text-2xl py-1">Im a Full-stack developer</p>
        </h1>
        <div className="flex py-10">
            <a href='https://github.com/ArumugamAK' target='_blank' className="pr-5 hover:text-white"><FaGithub size={40}/></a>
            <a href='https://leetcode.com/arumugam_2003/' target='_blank' className="pr-5  hover:text-white"><SiLeetcode size={40}/></a>
            <a href='https://www.linkedin.com/in/arumugam-ak/' target='_blank' className="pr-5  hover:text-white"><FaLinkedin size={40}/></a>
        </div>
        </div>
        <img className="md:w-1/3" src={Heroimg} />
    </div>
  )
}

