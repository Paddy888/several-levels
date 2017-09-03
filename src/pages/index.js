import React from 'react'
import Link from 'gatsby-link'
import Vivus from 'vivus'
import Tagline from '../components/Tagline'
import Header from '../components/Header'
import Container from '../components/utils/Container'
import Row from '../components/utils/Row'
import ColSM4 from '../components/utils/ColSM4'

const IndexPage = () =>
  <div>
    <Header />
      <Container>
        <Row>
          <ColSM4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
              <rect width="630" height="630" fill="#f7df1e"/>
              <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
            </svg>
          </ColSM4>
          <ColSM4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
              <rect width="630" height="630" fill="#f7df1e"/>
              <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
            </svg>
          </ColSM4>
          <ColSM4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
              <rect width="630" height="630" fill="#f7df1e"/>
              <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
            </svg>
          </ColSM4>
        </Row>

        <h1>several levels</h1>
        <h2>web and app development</h2>
        <h3>Hi, welcome to several levels. My name is Harrison McGuire and I am the founder and lead software developer. I'm dedidicated to making excellent, modern websites.</h3>
        <Tagline />
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <code>My code here</code>
        <pre>My pre here</pre>
        <button type="button" className="btn btn-primary">Hello</button>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
  </div>

export default IndexPage