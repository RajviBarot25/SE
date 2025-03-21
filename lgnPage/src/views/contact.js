import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ContactForm5 from '../components/contact-form5'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Dutiful Exalted Walrus</title>
        <meta property="og:title" content="Contact - Dutiful Exalted Walrus" />
      </Helmet>
      <ContactForm5
        action={
          <Fragment>
            <span className="contact-text1">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text3">Get in touch with us today!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text4">Contact us</span>
          </Fragment>
        }
      ></ContactForm5>
    </div>
  )
}

export default Contact
