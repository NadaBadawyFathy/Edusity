import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'

import Title from '../Title/Title';

const Program = () => {
  return (
    <div>
      <div className="campus bg-light" id='campus'>
        <div className="container">
          <Title subTitle='Gallery' title='Campus Photos'/>
            <div className="boxs">
                <div className="gallery">
                    <img src={gallery1} alt="" />
                </div>
                <div className="gallery">
                    <img src={gallery2} alt="" />
                </div>
                <div className="gallery">
                    <img src={gallery3} alt="" />
                </div>
                <div className="gallery">
                    <img src={gallery4} alt="" />
                </div>
            </div>
            <button className="btn">See more here <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Program
