import React from 'react';
import Image from 'gatsby-image';

const Contactform = ({ props }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: send email
  };

  return (
    <section className="contact" data-header>
      <div className="contact__box-wrapper">
        <div className="contact__box">
          <h1 className="is-h4">{props.title}</h1>
          <form action="/" className="form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="form-name">
                Your Name
              </label>
              <input
                className="form-input"
                type="text"
                id="form-name"
                name="name"
                required
                onFocus={addActiveClass}
                onBlur={removeActiveClass}
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
                name="email"
                required
                onFocus={addActiveClass}
                onBlur={removeActiveClass}
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
                name="message"
                required
                onFocus={addActiveClass}
                onBlur={removeActiveClass}
              />
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
