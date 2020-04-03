import React from 'react'
import logo from './logo.svg'
import { Col, Row, Container } from 'react-bootstrap'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  nav: {
    marginTop: '15px',
    marginBottom: '15px',
    fontFamily: 'Barlow-Bold'
  }
})

const HeaderContent = () => {
  const classes = useStyles()
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src={logo}></img>
          </Col>
          <Col>
            <h1>Iaam</h1>
          </Col>
          <Col>
            <nav className={classes.nav}>
              Job Seekers, Employers, FAQs, Why Iaam
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeaderContent