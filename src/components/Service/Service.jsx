import React from 'react'
import './Service.css'
import HeartEmoji from "../../img/img/heartemoji.png"
import Glasses from "../../img/img/glasses.png"
import Humble from "../../img/img/humble.png"
import Card from '../Card/Card'
import resume from './resume.pdf'
import {color, motion} from 'framer-motion';
const Service = () => {
  const transition ={duration:2 , type:'spring'};
  return (
    <div className="Service">
        {/*left sidee */}
        <div className="awesome">
          <span>My </span>
          <span>Experience</span>
        <span><b>LMiT :</b></span>
        <span>Leading a team of 3 UG students to build Last Mile Transporter(LMiT) from scratch with the </span>
          <span>aim of automating and soving indoor last-mile delivery problems at IITK.</span>
        {/* <p>Completed the infrastructure of the model after optimizing for the POC.</p>
           <p>Working on the balancing of the LMiT using MPU sensors and various data-driven control techniques</p> */}
        <span>Image Processing :</span>
        <span>Understood the properties of the digital images and various procedures to improve image quality</span>
        <span>Machine Learning :</span>
        <span>Created some models using Python, which can estimate values accurately </span>
        <a href={resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur c-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*right side */}
        <div className="cards">
          {/*middle */}
          <div className="blur" style={{background: "rgb(238,210,255)"}}></div>
           <motion.div 
            whileInView={{left:'24rem'}}
            initial={{left:'10rem'}}
            transition={transition}
            style={{left:'32rem' ,top:"-10rem"}}>
              <Card
              emoji={HeartEmoji}
              heading={'LMiT'}
              detail={'It is robot which help to transport things over short distances'}
              />
           </motion.div>
           {/*second card */}
           <motion.div 
              whileInView={{left:'8rem'}}
              initial={{left:'35rem'}}
              transition={transition}
              style={{top: "2rem" , left:"6rem"}}>
                <Card
                  emoji={Glasses}
                  heading={"Image Processing"}
                  detail={"Processing of images and modifying them using python and it`s libraries"}
                  />
           </motion.div>
           {/*3rd card */}
          <motion.div 
            whileInView={{left:'24rem',top:'10rem'}}
            initial={{left:'15rem', top:'15rem'}}
            transition={transition}
            style={{left:"26rem" ,top:"10rem"}}>
            <Card
            emoji={Humble}
            heading={"Machine Learning"}
            detail={"Using python estimating various best performing models in real life problems"}
            />
          <div className="blur s-blur" style={{background:"var(--purple)"}}></div>
          </motion.div>
        </div>
    </div>
  )
}

export default Service