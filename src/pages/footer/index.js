import React, { useState, memo } from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

import './style.scss';
import { handleSubmit } from '../../components/dataSender'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    handleSubmit(event, email, setEmail, message, setMessage);
  };

  return (
    <>
      <div id="contact" className="contact_title">
        <p>CONTACT</p>
      </div>
      <div className="contact_content">
        <div className="contact_left">
          <p>Let's work together!</p>
          <h1 style={{ fontSize: '2vw' }}>Email</h1>
          <h1 style={{ fontSize: '1.5vw' }}>phamhuuvinh912003@gmail.com</h1>
          <h1 style={{ fontSize: '2vw' }}>Phone</h1>
          <h1 style={{ fontSize: '1.5vw' }}>(+84) 35542475</h1>
          <h1 style={{ fontSize: '2vw' }}>Address</h1>
          <h1 style={{ fontSize: '1.5vw' }}>Bình Thạnh, TPHCM</h1>
        </div>
        <div className="contact_right">
          <div className="form-container">
            <form id="myForm" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-slate-950 text_input"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="emailInput"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="bg-slate-950 text_input"
                  placeholder="Message"
                  id="textArea"
                  rows="11"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="form_submit">
                <button
                  className="rounded-full hover:border-slate-400 submit"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact_icons">
        <a href="https://www.facebook.com/vinhhuudev/">
          <BsFacebook style={{ fontSize: '3vw' }} />
        </a>
        <a href="https://www.instagram.com/p.hvinhh/?next=%2F">
          <BsInstagram style={{ fontSize: '3vw' }} />
        </a>
        <a href="https://linkedin.com/in/vinh-phạm-hữu-0229b6301">
          <BsLinkedin style={{ fontSize: '3vw' }} />
        </a>
        <a href="https://github.com/HuuVinh0901">
          <BsGithub style={{ fontSize: '3vw' }} />
        </a>
      </div>
    </>
  );
};

export default memo(Footer);
