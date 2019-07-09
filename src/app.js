import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'views/home';
import Header from 'views/header';
import Footer from 'views/footer';
import Institucional from 'views/institucional';
import EstudiosInicio from 'views/estudios/inicio';
import EstudioTomografia from 'views/estudios/tomografia';
import EstudioResonancia from 'views/estudios/resonancia';
import EstudioEcografia from 'views/estudios/ecografia';
import './app.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/institucional' component={Institucional} />
          <Route exact path='/estudios' component={EstudiosInicio} />
          <Route exact path='/estudios/tomografia' component={EstudioTomografia} />
          <Route exact path='/estudios/resonancia' component={EstudioResonancia} />
          <Route exact path='/estudios/ecografia' component={EstudioEcografia} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
