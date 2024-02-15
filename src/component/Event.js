import React from 'react'
// import img from '../asserts/food-ecommerce.jpg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export const Event = () => {
  return (
    <div className="bg-secondary w-full h-full " >
       <div className="flex flex-col px-7 py-4 items-center ">
                <h1 className="border-b-4 border-primary mb-1 w-[420px] font-bold text-4xl text-white text-center">What I have Done So Far</h1>
                {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
        </div>
    <VerticalTimeline className="">
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:'rgb(85 81 227)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '20px solid  #ffffff' }}
        date="2023-05-06"
        iconStyle={{ background: '#8c5df8', color: '#fff' }}
        icon={<i className="fa fa-code" />}
    >
        
        <h3 className="vertical-timeline-element-title text-2xl font-bold border-b-4 border-secondary mb-1 w-[180px] ">YouTube-Clone</h3>
        <ul class="list-disc text-white">
            <li className='py-2'>Core Functionality Replication: The YouTube Clone faithfully reproduces essential features such as video upload, playback, search, and user interaction, providing users with a seamless experience reminiscent of the original platform.</li>
            <li>Modern Technology Stack: Built with React.js, Firebase, and Sass, the clone ensures scalability, responsiveness, and security, while maintaining a familiar interface for users.</li>
        </ul>
        {/* <p className="text-gray-800 dark:text-gray-300 text-base">The Real-Time Chat Application is a modern communication platform designed and developed by leveraging cutting-edge technologies such as React.js, Firebase, and Sass.</p> */}
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(85 81 227)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '20px solid  #ffffff' }}
        date="2023-03-22"
        iconStyle={{ background: '#8c5df8', color: '#fff' }}
        icon={<i className="fa fa-code" />}
    >
         <h3 className="vertical-timeline-element-title text-2xl font-bold border-b-4 border-secondary mb-1 w-[250px] ">Hotel-Room-Booking</h3>
        <ul class="list-disc text-white">
        <li className='py-2'>Effortless Room Search: Users can easily browse through available rooms based on various criteria such as dates, location, room type, and amenities, ensuring a seamless booking experience.</li>
        <li>Secure Reservation Management: Utilizing Firebase for backend services, the application securely manages user data, bookings, and payment information, ensuring confidentiality and reliability throughout the reservation process.</li>
  {/* <li>The Real-Time Chat Application is a modern communication platform designed and developed by leveraging cutting-edge technologies such as React.js, Firebase, and Sass.</li> */}
  </ul>
            </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(85 81 227)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '20px solid  #ffffff' }}
        date="2024-01-15"
        dateClassName='text-white'
        iconStyle={{ background: '#8c5df8', color: '#fff' }}
        icon={<i className="fa fa-code" />}
    >
         <h3 className="vertical-timeline-element-title text-2xl font-bold border-b-4 border-secondary mb-1 w-[160px] ">Google-Clone</h3>
        <ul class="list-disc text-white">
  <li className='py-2'>Accurate Search Results: The Google Clone delivers precise search results by integrating with the Google Search API, ensuring users receive relevant information quickly and efficiently.</li>
  <li>Enhanced User Experience: With features like voice search integration, customizable settings, and responsive design, the clone offers an intuitive and personalized search experience, catering to the diverse needs of users.</li>
  </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(85 81 227)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '20px solid  #ffffff' }}
        date="2023-01-03"
        iconStyle={{ background: '#8c5df8', color: '#fff' }}
        icon={<i className="fa fa-code" />}
    >
         <h3 className="vertical-timeline-element-title text-2xl font-bold border-b-4 border-secondary mb-1 w-[200px] md:w-[180px] ">Real-Time-Chat</h3>
        <ul class="list-disc text-white">
            <li className='py-2'>Instant Messaging: Users can exchange messages in real-time, fostering swift and efficient communication akin to popular messaging platforms.</li>
            <li>Dynamic User Interaction: React.js powers the application's dynamic user interface, ensuring smooth interaction and real-time updates without the need for page refreshes.</li>
  {/* <li>The Real-Time Chat Application is a modern communication platform designed and developed by leveraging cutting-edge technologies such as React.js, Firebase, and Sass.</li> */}
  </ul>
    </VerticalTimelineElement>
</VerticalTimeline> 
    </div>
  )
}
