import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer5.css'

const Footer5 = (props) => {
  return (
    <footer className="footer5-footer8 thq-section-padding">
      <div className="footer5-max-width thq-section-max-width">
        <div className="footer5-content">
          <div className="footer5-column">
            <div className="footer5-logo1">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer5-logo2"
              />
              <div className="footer5-links">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer5-text13">About Us</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link2 ?? (
                    <Fragment>
                      <span className="footer5-text16">Contact Us</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link3 ?? (
                    <Fragment>
                      <span className="footer5-text15">FAQs</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link4 ?? (
                    <Fragment>
                      <span className="footer5-text12">Terms of Service</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link5 ?? (
                    <Fragment>
                      <span className="footer5-text11">Privacy Policy</span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
          </div>
          <div className="footer5-actions1">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="footer5-text17">
                    Stay updated with our latest news and promotions by
                    subscribing to our newsletter.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="footer5-actions2">
              <div className="footer5-form">
                <div className="footer5-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer5-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer5-button">
                  <span className="thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="footer5-text10">
                          Subscribe to our newsletter
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <span className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="footer5-text21">
                      Connect with us on social media for more updates and
                      offers.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="footer5-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer5-row">
            <div className="footer5-footer-links">
              <span className="thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer5-text20">/privacy-policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer5-text14">/terms-of-service</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer5-text19">/cookies-policy</span>
                  </Fragment>
                )}
              </span>
            </div>
            <span className="thq-body-small">
              {props.content3 ?? (
                <Fragment>
                  <span className="footer5-text18">
                    © 2022 Company Name. All Rights Reserved.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer5.defaultProps = {
  action1: undefined,
  link5: undefined,
  link4: undefined,
  link1: undefined,
  termsLink: undefined,
  link3: undefined,
  link2: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  content1: undefined,
  logoAlt: 'Company Logo',
  content3: undefined,
  cookiesLink: undefined,
  privacyLink: undefined,
  content2: undefined,
}

Footer5.propTypes = {
  action1: PropTypes.element,
  link5: PropTypes.element,
  link4: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link3: PropTypes.element,
  link2: PropTypes.element,
  logoSrc: PropTypes.string,
  content1: PropTypes.element,
  logoAlt: PropTypes.string,
  content3: PropTypes.element,
  cookiesLink: PropTypes.element,
  privacyLink: PropTypes.element,
  content2: PropTypes.element,
}

export default Footer5
