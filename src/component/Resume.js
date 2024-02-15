import React from 'react'
import resume from '../asserts/resume.jpg'
import resumepdf from '../asserts/AK-Resume.pdf'

export const Resume = () => {
      return (
        <div className="flex flex-col md:flex-row bg-secondary px-5" id="resume">
          <div className=" py-5 md:w-1/2 flex  justify-center md:justify-end ">
            <img className="w-[500px]" src={resume}/>
        </div>
        <div className=" py-10 md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold"> Resume</h1>
               <p className="py-2">You can View My Resume</p>
               <a href={resumepdf} download className="btn1">Download</a>

            </div>
        </div>
    </div>
      )
    
}
