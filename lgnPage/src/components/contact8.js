import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact8.css'

const Contact8 = (props) => {
  return (
    <div className="contact8-container1 thq-section-padding">
      <div className="contact8-max-width thq-section-max-width">
        <div className="contact8-content1 thq-flex-row">
          <div className="contact8-content2">
            <h2 className="thq-heading-2 contact8-text10">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact8-text17">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large contact8-text11">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact8-text20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact8-content3 thq-flex-row">
          <div className="contact8-container2">
            <iframe
              src={props.location1GoogleMap}
              title="Map"
              className="contact8-iframe1"
            ></iframe>
            <h3 className="contact8-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact8-text18">Bucharest</span>
                </Fragment>
              )}
            </h3>
            <p className="contact8-text13 thq-body-large">
              {props.location1Details ?? (
                <Fragment>
                  <span className="contact8-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact8-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact8-container4">
            <iframe
              src={props.location2GoogleMap}
              title="Map"
              className="contact8-iframe2"
            ></iframe>
            <h3 className="contact8-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact8-text16">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="contact8-text15 thq-body-large">
              {props.location2Details ?? (
                <Fragment>
                  <span className="contact8-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact8-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact8.defaultProps = {
  location2: undefined,
  heading1: undefined,
  location1: undefined,
  location1Details: undefined,
  location2GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d87449.5721581957!2d23.6084223!3d46.7688557!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1713508390460!5m2!1sen!2sro',
  content1: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro',
  location2Details: undefined,
}

Contact8.propTypes = {
  location2: PropTypes.element,
  heading1: PropTypes.element,
  location1: PropTypes.element,
  location1Details: PropTypes.element,
  location2GoogleMap: PropTypes.string,
  content1: PropTypes.element,
  location1GoogleMap: PropTypes.string,
  location2Details: PropTypes.element,
}

export default Contact8
