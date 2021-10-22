import React from 'react'

import Video from './components/Video'
import Default from './components/Default'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import "./components/style.css"
const app = () => {
  return (
    <>
     <Router>
      
       <Switch>
         <Route Default exact path="/" component={Default}></Route>
         <Route exact path="/video/:title/:id" component={Video}></Route>
       </Switch>
     </Router>
    </>
  )
}

export default app
