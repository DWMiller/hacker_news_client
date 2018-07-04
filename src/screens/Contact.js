import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from 'components/Button';

const ContactFormContainer = styled.div`
  form {
    text-align: right;
  }

  input,
  textarea {
    margin-bottom: 0.5em;
    border: 1px solid #ddd;
    background: #fff;
    padding: 0.9em 0 0.9em 0.9em;
    font-size: 100%;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  button,
  input {
    line-height: normal;
  }

  textarea {
    height: 10.3em;
    overflow: auto;
    vertical-align: top;
    font-family: inherit;
  }
`;

export class ContactScreen extends Component {
  render() {
    return (
      <ContactFormContainer className="contactForm">
        <p>For all inquiries, use the form below.</p>
        <form
          method="POST"
          action="https://formspree.io/davidwmiller@protonmail.com"
        >
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Your message" />
          <Button type="submit">Send</Button>
        </form>
      </ContactFormContainer>
    );
  }
}

export default ContactScreen;
