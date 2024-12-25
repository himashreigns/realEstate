import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

function HomePage() {
  return (
    <div className='homePage'>
        <div className='textContainer'>
          <div className='wrapper'>
            <h1 className='title'>
            Find, Explore, and Secure Your Ideal Place
            </h1>
            <p>Welcome to our real estate hub, where finding your dream home or perfect property is simple and seamless. Explore a wide range of listings tailored to your needs, from cozy apartments to luxury estates. Start your journey today and let us help you find the place you’ll love to call home.</p>
            <SearchBar/>
            <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className='box'>
              <h1>900+</h1>
              <h2>Property Ready</h2>
            </div>
            </div>
            </div>
            </div>
        <div className='imgContainer'>
          <img src='' alt=''/>
        </div>
    </div>
  )
}

export default HomePage