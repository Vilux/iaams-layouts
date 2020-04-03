import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
  marginBottom: '15px'
}

const bodyStyle = {
  marginBottom: '15px'
}
const footerStyle = {
  position:'absolute',
  bottom:'0',
}

const App = () => {
  return (
    <div style={pageStyle}>
      <header>
        <h1>Header</h1>
      </header>
      <nav style={navStyle}>
        Home, Profile, Search Jobs
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