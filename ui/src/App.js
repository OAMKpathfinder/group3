import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Components/Navbar/Navbar'

import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Routes/Home/Home'
import Calculate from './Routes/Calculation/Calculation'
import Objects from './Routes/Objects/Objects'
import Building from './Routes/Building/Building'
import Material from './Routes/Materials/Materials'



function App({ children }) {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/building" exact component={Building} />
          <Route path="/objects" exact component={Objects} />
          
          <Route path="/materials" exact component={Material} />
          <Route path="/calculate" exact component={Calculate} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  children: PropTypes.element.isRequired
}

export default App