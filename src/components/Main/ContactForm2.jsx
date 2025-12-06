import { useForm, ValidationError } from '@formspree/react';
import { useState, useRef } from 'react';
import './ContactForm.css';
import CloudsBG from '../Summary/CloudsBG';

const alertMessage = 'Your message has been sent. I look forward to working with you!';

export default function ContactForm2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const contactRef = useRef();
  const [state, handleSubmit] = useForm('mgvgzrpn');
  if (state.succeeded) {
    setName('');
    setEmail('');
    setMessage('');
    // alert(alertMessage);
    window.location.replace('/');
    return <p>I look forward to working with you!</p>;
    // return alert(alertMessage);
  }
  return (
    <>
      <CloudsBG />
      <div className="contact-form-wrapper">
        <h1>Let&apos;s work together!</h1>
        <form className="contact-form" onSubmit={handleSubmit} id="contact">
          {/* <label htmlFor="name">Name</label> */}
          <input id="name" type="name" name="name" className="form-name" placeholder="name" />
          {/* <label htmlFor="email">Email Address</label> */}
          <input id="email" type="email" name="email" placeholder="email" className="form-email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          {/* <label htmlFor="message">Message</label> */}
          <textarea id="message" placeholder="message" name="message" className="form-message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
