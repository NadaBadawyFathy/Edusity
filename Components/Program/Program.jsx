import React from 'react'
import './Program.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import prog_icon_1 from '../../assets/program-icon-1.png'
import prog_icon_2 from '../../assets/program-icon-2.png'
import prog_icon_3 from '../../assets/program-icon-3.png'
import Title from './../Title/Title';
const Program = () => {
  return (
    <div>
      <div className="programs bg-light" id='program'>
        <div className="container">
          <Title subTitle='Our PROGRAM' title='What We Offer'/>
            <div className="boxs">
                <div className="program">
                    <img src={program1} alt="" />
                    <div className="caption">
                        <img src={prog_icon_1} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program2} alt="" />
                    <div className="caption">
                        <img src={prog_icon_2} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program3} alt="" />
                    <div className="caption">
                        <img src={prog_icon_3} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Program
