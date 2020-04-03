import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';

const pageStyle = {
  margin: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingBottom: '60px'
  };

const navStyle = {
  marginTop: '15px',
  marginBottom: '15px',
  fontFamily: 'Barlow-Bold'
}

const bodyStyle = {
  marginBottom: '15px'
}

const footerStyle = {
  position:'absolute',
  bottom:'0',
}

const headerStyle = {
  fontFamily: 'Barlow-Black'
}

const App = () => {
  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Header</h1>
      </header>
      <nav style={navStyle}>
      <img src={logo}></img> Job Seekers, Employers, FAQs, Why Iaam
      </nav>
      <main>
        <article style={bodyStyle}>
          <h2>Why choose us</h2>
        </article>
        <aside>
          <h2>Related</h2>
        </aside>
      </main>
      <footer style={footerStyle}>
        terms and conditions, copyright, careers, about us
      </footer>
    </div>
  )
}

export default App