import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'

const Testimonials = () => {

    const Slider = useRef();
    let tx = 0 ;

        const slideForward = () =>{
            if(tx > -50){
                tx -=25 ;
            }
            Slider.current.style.transform = `translateX(${tx}%)`;
            
        }
        const slideBackward = () =>{
            if(tx < 0){
                tx +=25 ;
            }
            Slider.current.style.transform = `translateX(${tx}%)`;
        }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={Slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>william Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sed sint explicabo, laudantium neque eaque saepe esse laborum velit dolorum incidunt eos voluptatum adipisci porro repellendus animi nostrum eius atque est vero deleniti ex temporibus nobis! Dolores esse iste iusto?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3> Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sed sint explicabo, laudantium neque eaque saepe esse laborum velit dolorum incidunt eos voluptatum adipisci porro repellendus animi nostrum eius atque est vero deleniti ex temporibus nobis! Dolores esse iste iusto?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>william </h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sed sint explicabo, laudantium neque eaque saepe esse laborum velit dolorum incidunt eos voluptatum adipisci porro repellendus animi nostrum eius atque est vero deleniti ex temporibus nobis! Dolores esse iste iusto?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>will Jack</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sed sint explicabo, laudantium neque eaque saepe esse laborum velit dolorum incidunt eos voluptatum adipisci porro repellendus animi nostrum eius atque est vero deleniti ex temporibus nobis! Dolores esse iste iusto?</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
