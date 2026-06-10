import React from 'react';
import './Style.css';
import Supriya from './Assets/photo.jpg'


const Home = () => {
  return (
    <div className='home-container'>
    <div  className="home-left">
      <h1>Hi, I'm Supriya Motipawale</h1>
      <p>&emsp;&emsp;&emsp;&emsp; AN ASPIRING DEVELOPER 👨‍💻 | CRICKET FAN 🏏 | ChefAtHeart👩‍🍳</p>
    </div>
    <div className='home-right'>
      <img src={Supriya}></img>&emsp;&emsp;&emsp;&emsp;
    </div>
    </div>
  );
};

export default Home;
