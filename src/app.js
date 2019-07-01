import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'views/home';
import Header from 'views/header';
import Institucional from 'views/institucional';
import estudiosHeader from 'views/estudios/header'
import estudiosInicio from 'views/estudios/inicio';
import estudioTomografia from 'views/estudios/tomografia';
import estudioResonancia from 'views/estudios/resonancia';
import estudioEcografia from 'views/estudios/inicio';
import './app.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:slug' render={ function(props) { return (
          <div className='wrapper'>
            <Header />
            <Switch>
              <Route exact path='/institucional' render={ function() { return ( <Institucional  /> ) } } />
              <Route path='/estudios' component={estudiosHeader} />
              <Route exact path='/estudios/inicio' component={estudiosInicio} />
              <Route exact path='/estudios/tomografia' component={estudioTomografia} />
              <Route exact path='/estudios/resonancia' component={estudioResonancia} />
              <Route exact path='/estudios/ecografia' component={estudioEcografia} />
            </Switch>
          </div>
          ) }.bind(this) }
        />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
