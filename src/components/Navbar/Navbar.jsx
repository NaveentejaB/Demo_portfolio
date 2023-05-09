import React from 'react';
import './Navbar.css'
import { ComponentProps } from 'react';

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Teja</div>
        </div>
        <div className="n-right">
            <div className="n-list mx-3">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>My Experties</li>
                    <li>Projects</li>
                    <li>About Me</li>
                </ul>
            </div>
            <button className="button n-button">
                contact
            </button>
            
        </div>
    </div>
    
  );
}

export default Navbar;
