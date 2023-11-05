import React from 'react';
import './heading.css';
import Prof from "../../img/84511.png"
import Github from "../../img/🦆 icon _github_.png"
import linkedin from "../../img/🦆 icon _social linkedin_.png"
import Spotify from "../../img/🦆 icon _spotify_.png"
import website from "../../img/🦆 icon _internet web browser symbolic_.png"
import  { useEffect, useState } from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Heading = () => {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    // When the component mounts, trigger the animation
    setAnimationActive(true);
  }, []);

  
 
  
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxomne7",
        "template_h4sh03m",
        form.current,
        "i6Aaq5I0OEyQLqAPi"
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        form.current.reset();
        setDone(true);
        console.log('email sent sucessfully');  
      })
      .catch((error) => {
        console.error('Email not sent:', error);
      });
  };
  

  return (
    <>
      <div className="main">
        <img src={Prof} className="prof" alt="Profile Image" />
        <div className={`heading-box ${animationActive ? 'active' : ''}`}>
          <span className="heading">Nikhil Verma</span>
          <span className="subheading">S&nbsp;O&nbsp;F&nbsp;T&nbsp;W&nbsp;A&nbsp;R&nbsp;E&nbsp; D&nbsp;E&nbsp;V&nbsp;E&nbsp;L&nbsp;O&nbsp;P&nbsp;E&nbsp;R&nbsp;</span>
        </div>
      </div>
      <div className="links">
          <a className="link-tag" href="https://github.com/nickhil-verma"><img src= {Github} /></a>
          <a className="link-tag" href="https://www.linkedin.com/in/nikhil-kumar-b9ba861b0/?originalSubdomain=in  "><img src=  {linkedin}/></a>
          <a className="link-tag" href="https://open.spotify.com/user/31snd5yfthgvhmz6n6exuhxalxdm?si=f0ZB7_smSRCvjEYhxWi4kg&nd=1"><img src= {Spotify}/></a>
          <a className="link-tag" href="https://nickhil-verma.netlify.app/"><img src= {website}/></a>
      </div>
      <div className="hero">
         <a href="https://nickhil-verma.netlify.app/"><button className="button">PORTFOLIO</button></a> 
          <a  href="tel:+919060177870"><button className="button">CALL ME</button></a>
          <form className="inputfeilds" ref={form} onSubmit={sendEmail}   >
            <input type="text" name="user_name" className="textfeild" placeholder="YOUR NAME" required />
            <input type="email" name="user_email" className="textfeild" placeholder="YOUR EMAIL" required />
            <input type="text" name="mobno" className="textfeild" placeholder="YOUR PHONE NO." required />
            <textarea type="text" name="message" className="textarea" placeholder="YOUR MESSAGE"></textarea>
            <button className="button submit" value="Send" >SEND</button>
            
            <span className="submit-msg">{done && "Message Sent. Confirmation is sent to your mail"}</span>
          </form>
      </div>
      <span className="footer" >N &nbsp;I&nbsp; K&nbsp; H&nbsp; I&nbsp; L&nbsp; V&nbsp; E &nbsp;R&nbsp; M&nbsp; A&nbsp; |&nbsp; O&nbsp; S&nbsp; C&nbsp;</span>
    </>
  );
};

export default Heading;
