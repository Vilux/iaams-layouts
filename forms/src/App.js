import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <nav>
        Home, Profile, Search Jobs
      </nav>
      <main>
        <article>
          <h2>Why choose us</h2>
        </article>
        <aside>
          <h2>Related</h2>
        </aside>
      </main>
      <footer>
        terms and conditions, copyright, careers, about us
      </footer>
    </>
  )
}

export default App