import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn6 from '../components/sign-in6'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dutiful Exalted Walrus</title>
        <meta property="og:title" content="Dutiful Exalted Walrus" />
      </Helmet>
      <SignIn6
        action1={
          <Fragment>
            <span className="home-text1">Sign In</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text2">Sign In to Your Account</span>
          </Fragment>
        }
        image1Src="/cov-1400w.webp"
        rootClassName="sign-in6root-class-name"
      ></SignIn6>
    </div>
  )
}

export default Home
