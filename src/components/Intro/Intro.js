import React from 'react';
import './Intro.css'
import Github from '../../img/img/github.png'
import Instagram from '../../img/img/instagram.png'
import LinkedIn from '../../img/img/linkedin.png'
import  Vector1 from '../../img/img/Vector1.png'
import  Vector2 from '../../img/img/Vector2.png'
import glassesimoji from '../../img/img/glassesimoji.png'
import {motion} from 'framer-motion';
const Intro = () => {
    const transition ={duration:2 , type:'spring'}
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hy ! I am</span>
                <span>Naveen Teja</span>
                <span >An enthustiatic web developer and competitive Programmer</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href='https://github.com/NaveentejaB'>
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/beerauppam-naveenteja-72487a23b'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href='https://www.instagram.com/the_weird_physicist/'>
                <img src={Instagram} alt="" />
                </a>
            </div>
            <div className="blurr s-blur" style={{background: "rgb(238,210,255)"}}></div>
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <motion.img 
                    initial ={{left :'-36%'}}
                    whileInView ={{left:'-24%'}}
                    transition ={transition}

                    src={glassesimoji} alt="" />
            </div>
    </div>
  );
}

export default Intro;
