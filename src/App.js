import React from 'react'
import {Auth, Home} from './pages'

import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <Route path="/im" component={Home}/>
      <Route path={['/', '/signin']} component={Auth}/>
    </div>  
  );
}

export default App;
