import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hcdtubm', 'template_1595sfo', ref.current, 'L3lvqrNvvuk4FkdH-').then((result) => {
      console.log(result.text);
      setSuccess(true);
      ref.current.reset();
    }

      ,
      (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }


  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Send your message through your email :)
        </p>
      </div>
      <form ref={ref} onSubmit={handleSubmit} className="contact--form--container">
        <label htmlFor="name" className="contact--label">
          <span className="text-md">Name</span>
          <input
            type="text"
            className="contact--input text-md"
            name="name"
            id="name"
            required
          />
        </label>

        <label htmlFor="email" className="contact--label">
          <span className="text-md">Email</span>
          <input
            type="email"
            className="contact--input text-md"
            name="email"
            id="email"
            required
          />
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name='message'
            id="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>

        {success && <p>Your message has been sent. We'll get back to you soon :)</p>}
      </form>
    </section>
  );
}
