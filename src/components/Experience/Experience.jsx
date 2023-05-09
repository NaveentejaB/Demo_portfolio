import React from 'react';
import "./Experience.css"
import Cplus from "../../Circleimg/icons8-c++-100.png"
import js from "../../Circleimg/icons8-node-js-96.png"
import reactjs from "../../Circleimg/icons8-react-120.png"
import nodejs from "../../Circleimg/icons8-nodejs-96.png"
import {motion} from 'framer-motion';
const Experience = () => {
    
  return (
    
    <div className="expertises">
        <div className="awesome">
            <span>My</span>
            <span>Expertises</span>
            <br />
            <li>Frontend Web Development</li>
            <li>Backend Web Development</li>
            <li>Competitive Programming(in C++,C and JavaScript)</li>
        </div>
        <div className="w-right">
            <motion.div
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40%'}}
                transition={{duration:4 , type:"spring"}}
            className='w-mainCircle'>
                <div className="w-secCircle">
                    <img className='img1' src={Cplus} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={js} alt="" />   
                </div>
                <div className="w-secCircle">
                    <img src={reactjs} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={nodejs} alt="" />
                </div>
            </motion.div>
            <div className="blurr s-blur" style={{background: "rgb(238,210,255)"}}></div>
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            <div className="s-backCircle blueCircle"></div>
            <div className="s-backCircle yellowCircle"></div>
        </div>
    </div>
  );
}

export default Experience;
