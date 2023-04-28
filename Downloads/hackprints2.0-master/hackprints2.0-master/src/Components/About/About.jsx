import React from 'react'
import './Assets/about.css'
import cr from './Assets/crowdedroom.png'

const About = () => {
  return (
    <div className='About-container'>
        <div className="about-wrapper">
            <div className="about-left">
                <div className="top">Don’t turn your <span className='about-skin'>room </span>into this...</div>
                <div className="bot">
                    <div className="botpara1"> 
                Introducing ShareBox, the ultimate solution to all your everyday needs! We're a bunch of folks who believe that you shouldn't have to buy things you only need once in a blue moon - which in turn just make your room crowdy. That's why we rent out everything under the sun - from kitchen gadgets to power tools to camping gear - you name it, we've got it.<br></br> 
                    </div>
                    <div className="botpara2">
                    Whether you need a pasta maker for a romantic dinner, a drill for that DIY project, or a tent for a weekend getaway, we've got you covered. And the best part? You can keep the stuff for as long as you want, without any pesky ownership responsibilities. We like to think of ourselves as the cooler, less clingy version of your ex.
                    </div>
                </div>
            </div>
            <div className="about-right">
                <img id="cr" src={cr}/>
            </div>
        </div>
        
    </div>
  )
}

export default About