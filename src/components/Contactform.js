import React, { useState, useRef } from 'react';
import Image from 'gatsby-image';
import emailjs from 'emailjs-com';

const Contactform = ({ props }) => {
  const initialState = {
    to_name: 'Pepita',
    from_name: '',
    from_email: '',
    from_message: '',
  };
  const [formParams, setFormParams] = useState(initialState);
  const [showNotification, setShowNotification] = useState(false);
  const [formError, setFormError] = useState(false);
  const formEl = useRef(null);

  const addActiveClass = (e) => {
    const input = e.currentTarget;
    input.parentElement.classList.add('is-active');
  };

  const removeActiveClass = (e) => {
    const input = e.currentTarget;

    if (input.value === '') {
      input.parentElement.classList.remove('is-active');
    }
  };

  const resetForm = () => {
    formEl.current.reset();
    const formFields = [...document.querySelectorAll('.form-field')];
    formFields.forEach((field) => field.classList.remove('is-active'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowNotification(false);
    setFormError(false);

    emailjs
      .send(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        formParams,
        process.env.GATSBY_USER_ID
      )
      .then(
        (response) => {
          setFormParams(initialState);
          resetForm();
          setFormError(false);
          setShowNotification('Formular wurde erfolgreich abgeschickt!');
        },
        (err) => {
          setFormError(true);
          setShowNotification('Es ist leider ein Fehler aufgetreten!');
        }
      );
  };

  return (
    <section className="contact" data-header>
      <div className="contact__box-wrapper">
        <div className="contact__box">
          <h1 className="is-h4">{props.title}</h1>
          <form
            action="/"
            className="form"
            onSubmit={handleSubmit}
            ref={formEl}
          >
            <div className="form-field">
              <label className="form-label" htmlFor="form-name">
                Your Name
              </label>
              <input
                className="form-input"
                type="text"
                id="form-name"
                name="from_name"
                required
                onFocus={addActiveClass}
                onBlur={removeActiveClass}
                onChange={(e) =>
                  setFormParams({ ...formParams, from_name: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="form-email">
                Your E-Mail
              </label>
              <input
                className="form-input"
                type="email"
                id="form-email"
                name="from_email"
                required
                onFocus={addActiveClass}
                onBlur={removeActiveClass}
                onChange={(e) =>
                  setFormParams({ ...formParams, from_email: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="form-message">
                Message
              </label>
              <textarea
                className="form-textarea"
                type="text"
                id="form-message"
                name="from_message"
                required
                onFocus={addActiveClass}
                onBlur={removeActiveClass}
                onChange={(e) =>
                  setFormParams({ ...formParams, from_message: e.target.value })
                }
              />
            </div>
            <div className="form-notification-wrapper">
              {showNotification && (
                <div
                  className={`form-notification ${
                    formError ? 'is-error' : 'is-valid'
                  }`}
                >
                  {showNotification}
                </div>
              )}
            </div>

            <div className="form-action">
              <button className="button submit-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact__image">
        <Image
          fluid={props.backgroundImage.fluid}
          alt={props.backgroundImage.title}
        />
      </div>
    </section>
  );
};

export default Contactform;
