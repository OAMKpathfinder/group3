import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Calculate from './Routes/Calculation/Calculation'
import Objects from './Routes/Objects/Objects'
import Building from './Routes/Building/Building'
import Materials from './Routes/Materials/Materials'
import Results from './Routes/Calculation_Zhanna/Calculation.js'
import CalcResults from './Routes/CalcResult/Results.js'



function App({ children }) {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route path="/building" exact component={Building} />
          <Route path="/objects" exact component={Objects} />
          <Route path="/materials" exact component={Materials} />
          <Route path="/calculate" exact component={Calculate} />
          <Route path="/result" exact component={Results} />
          <Route path="/result/1" exact component={CalcResults} />
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