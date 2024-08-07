import React from 'react';
import Section from '../Section';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact: React.FC = () => (
  <Section id="contact" title="Contact Me">
    <ContactInfo />
    <ContactForm />
  </Section>
);

export default Contact;
