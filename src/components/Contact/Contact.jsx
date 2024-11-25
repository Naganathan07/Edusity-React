import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "291a849a-87b0-407e-83a4-8d1892fc3d41");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.Your feedback,questions and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
            <li> <img src={mail_icon} alt="" />Edusity@gmail.com</li>
            <li>  <img src={phone_icon} />+1 987654322</li>
            <li> <img src={location_icon}/> 88 Massachusetts Ave , cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Mobile Number' required />
            <label >Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message '  required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
