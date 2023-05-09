// import logo from './logo.svg';
import './App.css';
// import { useContext } from 'react';
// import { themeContext } from './contest';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Service from './components/Service/Service';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
  const [state, setState] = useState('light');
  const toggle = () =>{
    if(state === 'dark')
      setState('light');
    else
      setState('dark');
  }
  return (
    <div className="App"
    style={{
      background : (state === 'dark')? 'black':'white',
      color :(state === 'dark') ? 'white' :'black'
    }}>
    
    {/* <button className='button' onClick={toggle}>click me baby!</button> */}
    <Navbar onClick={toggle}/>
    <Intro />
    <Service/>
    <Experience/>
    <Footer/>
    </div>
  );
}

export default App;
