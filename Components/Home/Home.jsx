import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="container">
        <h1>We Ensure better education <br /> for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, 
            and experiences needed to excel in the dynamic field of education
        </p>
        <button className="btn">Explore more <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default Home
