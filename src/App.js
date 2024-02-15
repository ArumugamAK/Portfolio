// import logo from './logo.svg';
import './App.css';
import { About } from './component/About';
import Contact from './component/Contact';
// import EmailForm from './component/Contact';
import { Event } from './component/Event';
import Experience from './component/Experience';
import { Footer } from './component/Footer';
// import { Email } from './component/Emailform';
import { Hero } from './component/Hero';
import { Navbar } from './component/Navbar';
import { Project } from './component/Project';
import { Resume } from './component/Resume';
// import { Form } from './component/Form';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <About/>
      <Experience/>
      <Event/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
      {/* <EmailForm/> */}
      {/* <Email/> */}
  </div>
  );
}

export default App;
