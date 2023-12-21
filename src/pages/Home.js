import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import "./Home.css"
import Search from './Search';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__header'>
        <div className='home__headerLeft'>
            <p>About</p>
            <p>Store</p>
        </div>
        <div className='home__headerRight'>
            <p>Gmail</p>
            <p>Images</p>
            <AppsIcon/>
            <Avatar/>
        </div>
        </div>
        <div className='home__body'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"/>
        
        <div className="home__inputContainer">
            <Search/>
            </div>
        </div>
    </div>
  )
}

export default Home