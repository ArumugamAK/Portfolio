import { useRef } from 'react';
// import '../cssfile/contact.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
 
const contacttran = () => {
    return {
      hidden: {
        x: -100,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: 0,
        },
      },
    };
  }

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // notify("Mail successfully send");
    
        emailjs
          .sendForm('service_qwsc70r', 'template_hquolal', form.current, {
            publicKey: 'T4CwELYF2zPjvvIS1',
          })
          .then(
            () => {
                console.log("successsfully");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return ( 
      <div className='bg-primary' id="contact">
         <div className="flex flex-col px-7 py-4 items-center ">
                <h1 className="border-b-4 border-primary mb-1 w-[220px] font-bold text-4xl text-white text-center">Get In Touch</h1>
                {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
        </div>
        <div className="contact">
            <motion.div
                initial='hidden'
                whileInView='show'
                variants={contacttran()}
                className='contactform bg-secondary items-center'
                >
                <form ref={form} onSubmit={sendEmail}>
                    <div className="contacttitle">
                    <h1 className="font-bold text-4xl text-white text-center py-4">Contact.</h1>
                    </div>
                    <div className="contactpadding">
                        <div className="field">
                            Name : 
                            <br/>
                            <input type="text" name='user_name' placeholder="What's your name?"/>
                        </div>
                        <div className="field">
                            Email : 
                            <br/>
                            <input type="text" name='user_email' placeholder="What's your Email?"/>
                        </div>
                        <div className="field">
                            Message : 
                            <br/>
                            <textarea type="text" name='message' placeholder="Enter"/>
                        </div>
                        <div className="contactbutton">
                            <button className='contactbtn themesecound bg-primary' type='submit'>Send</button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
      </div>
     );
}
 
export default Contact;
