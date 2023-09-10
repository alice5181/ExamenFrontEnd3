import React from 'react';
import Form from '../Components/Form';
import { useContextGlobal } from '../Components/utils/global.context';
import './Contact.css'; 

const Contact = () => {
  const { theme } = useContextGlobal();

  return (
    <div>
      <h2 className="contact-title">Want to know more?</h2>
      <p className="contact-paragraph">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;