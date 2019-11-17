import React from "react";

import { navigate } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null
    };
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email)
      .then(data => {
        navigate(`/${data.result}/`);
      })
      .catch(err => {
        navigate(`/${err.result}/`);
      });
  };

  render() {
    return (
      <section className="subscribe">
        <h2 className="subscribe__title">
          Get All The Best Information From Furry Canines Directly Into Your
          Inbox.
        </h2>
        <form
          noValidate
          onSubmit={this._handleSubmit}
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          className="subscribe__form"
          autoComplete="off"
        >
          <div className="subscribe__form--group">
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="youremail@example.com"
              autoComplete="off"
              onChange={this.handleChange}
              aria-label="subscribe email input"
            />

            <button className="btn btn__primary" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default SubscribeForm;
