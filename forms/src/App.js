import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderContent from './HeaderContent'
import { createUseStyles } from 'react-jss'
import EmployerDashboard from './EmployerDashboardLayout'
import GridLayout from './GridLayout'
import JobSeekerDashboard from './JobSeekerDashboardLayout'
import HomepageLayout from './HomepageLayout'

const useStyles = createUseStyles({
  page: {
    margin: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '60px'
  },
  body: {
    marginBottom: '15px'
  },
  footer: {
    position: 'absolute',
    bottom: '0',
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.page}>
      <header>
        <HeaderContent/>
      </header>
      <main>
        <article className={classes.body}>
          <HomepageLayout/>
        </article>
        <aside>
          <h2>Related</h2>
        </aside>
      </main>
      <footer className={classes.footer}>
        terms and conditions, copyright, careers, about us
      </footer>
    </div>
  )
}

export default App