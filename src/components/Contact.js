import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => (
  <Container id="contact" className="contact-section">
    <h2 className="contact-title">Contact Me</h2>
    <Form
      action="https://formspree.io/f/xyzpgyvp"  // Replace with your actual Formspree form ID
      method="POST"
      className="contact-form"
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" name="name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Your email" name="email" required />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="message"
          placeholder="Write your message..."
          required
        />
      </Form.Group>

      {/* Optional subject or redirect */}
      <input type="hidden" name="_subject" value="New message from your portfolio!" />
      {/* <input type="hidden" name="_next" value="https://yourdomain.com/thankyou" /> */}

      <Button variant="primary" type="submit" className="contact-button">
        Send Message
      </Button>
    </Form>
  </Container>
);

export default Contact;
