import React, { useState } from 'react';
import style from './Contact.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { Banner } from '../../components/Banner/Banner';
import { Newsleatter } from '../../components/Newsletter/Newsleatter';

export const Contact = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState({});
  const [shakeFields, setShakeFields] = useState({});

  const validate = (data) => {
    const newErrors = {};

    if (data.name.trim() === '') newErrors.name = 'Name is required';
    if (data.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Please enter a valid Email';
    }
    if (data.subject.trim() === '') newErrors.subject = 'Subject is required';
    if (data.message.trim() === '') {
      newErrors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setError(newErrors);

    // Handle shake animation
    const fieldsToShake = {};
    Object.keys(newErrors).forEach((key) => {
      fieldsToShake[key] = true;
    });
    setShakeFields(fieldsToShake);

    // Remove shake after 500ms
    setTimeout(() => setShakeFields({}), 500);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData.entries());

    if (!validate(dataObject)) return;

    setResult('Sending....');
    formData.append('access_key', 'ef3dd8b6-88e2-493d-9ea6-ec4a4c202498');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    }
  };

  return (
    <Layout>
      <Banner
        bgImage={'images/banner/banner.png'}
        title={'let`s_talk'}
        subTitle={'LEAVE A MESSAGE, We love to hear from you!'}
      />
      <div className={style.contact}>
        <div className="container">
          <div className={style['map-section']}>
            <div className={style.text}>
              <h5>GET IN TOUCH</h5>
              <h3>Visit one of our agency locations or contact us today</h3>
              <h4>Head Office</h4>
              <p><i className="fa-regular fa-map"></i>Wellington Square, Oxford OX1 2JD, United Kingdom</p>
              <p><i className="fa-regular fa-envelope"></i>contact@example.com</p>
              <p><i className="fa-solid fa-phone"></i>+383 48 123 456</p>
              <p><i className="fa-regular fa-clock"></i>Monday to Saturday: 9.00am to 16.00pm</p>
            </div>
            <div className={style.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.21205372011!2d-1.2606216093144362!3d51.75664159556546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2s!4v1764251982853!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className={style['contact-section']}>
            <div className={style['inputs-section']}>
              <h5>LEAVE A MESSAGE</h5>
              <h3>We love to hear from you</h3>
              <form onSubmit={onSubmit}>
                {['name', 'email', 'subject'].map((field) => (
                  <div className={style.input} key={field}>
                    <input
                      name={field}
                      placeholder={field === 'name' ? 'Your Name' : field === 'email' ? 'E-Mail' : 'Subject'}
                      type="text"
                      className={shakeFields[field] ? style.shake : ''}
                    />
                    <span className={style.error}>{error[field]}</span>
                  </div>
                ))}
                <div className={style.input}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className={shakeFields.message ? style.shake : ''}
                  />
                  <span className={style.error}>{error.message}</span>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>

            <div className={style.employes}>
              <div className={style.employe}>
                <div className={style['img-holder']}>
                  <img src="images/people/1.png" alt="person" />
                </div>
                <div className={style['text-holder']}>
                  <h4>John Doe</h4>
                  <p>Senior Marketing Manager</p>
                  <p>Phone: +000 123 000 77 88</p>
                  <p>Email: contact@example.com</p>
                </div>
              </div>

              <div className={style.employe}>
                <div className={style['img-holder']}>
                  <img src="images/people/2.png" alt="person" />
                </div>
                <div className={style['text-holder']}>
                  <h4>William Smith</h4>
                  <p>Senior Marketing Manager</p>
                  <p>Phone: +000 123 000 77 88</p>
                  <p>Email: contact@example.com</p>
                </div>
              </div>

              <div className={style.employe}>
                <div className={style['img-holder']}>
                  <img src="images/people/3.png" alt="person" />
                </div>
                <div className={style['text-holder']}>
                  <h4>Emma Stone</h4>
                  <p>Senior Marketing Manager</p>
                  <p>Phone: +000 123 000 77 88</p>
                  <p>Email: contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsleatter />
    </Layout>
  );
};
