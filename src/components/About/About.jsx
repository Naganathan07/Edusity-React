import React from 'react'
import './About.css'
import about_img from '../../assets/images/about.png'
import play_icon from '../../assets/images/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, deserunt et sint debitis possimus non voluptatem quam fugiat! Ab tempore tenetur totam labore atque aliquam delectus neque consequatur et illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod libero suscipit quisquam nulla consequuntur quis aliquid vitae quia iusto, modi velit et perferendis, deleniti beatae culpa blanditiis est voluptate dolor ab itaque odit? Ducimus minus similique error fugit corporis libero maxime, eligendi facilis. Hic unde illum quis beatae. Atque, harum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae fugit tempore itaque earum vero adipisci architecto amet cumque reprehenderit ratione quaerat facere quae tempora quibusdam esse perferendis, reiciendis quo laboriosam nobis veniam vel dolores expedita? Voluptatem, consectetur accusantium sit quidem architecto </p>
      </div>
    </div>
  )
}

export default About
