import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/styles'
import Navbar from './Components/Navbar/Navbar'

function App({ children }) {
  return (
    <div className='container'>
      <Navbar />
      <div className='children'>{children}</div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  children: PropTypes.element.isRequired
}

export default App