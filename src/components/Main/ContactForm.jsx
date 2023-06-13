import React, { Suspense, useEffect, useState, useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const contactRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', { name, email, message });
    emailjs.sendForm('service_i70vkk5', 'template_0z30u1o', event.target, 'xKFk6ZSEiYrwgvG7V').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setName('');
    setEmail('');
    setMessage('');
    alert('Your message has been sent. I look forward to working with you!');
  };

  return (
    <div className="contact-form-wrapper">
      <h1>Let&apos;s work together!</h1>
      <form
        className="contact-form"
        ref={contactRef}
        // onSubmit={handleSubmit}
        id="contact"
        //
      >
        <input
          value={name}
          name="name"
          className="form-name"
          type="text"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          value={email}
          name="email"
          className="form-email"
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          value={message}
          cols={40}
          rows={10}
          name="message"
          className="form-message"
          type="text"
          placeholder="message"
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className="form-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
