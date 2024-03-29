import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'views/home';
import Header from 'views/header';
import FullMenu from 'views/fullMenu';
import Footer from 'views/footer';
import Institucional from 'views/institucional';
import EstudiosInicio from 'views/estudios/inicio';
import EstudioTomografia from 'views/estudios/tomografia';
import EstudioResonancia from 'views/estudios/resonancia';
import EstudioEcografia from 'views/estudios/ecografia';
import EstudioMamografia from 'views/estudios/mamografia';
import Pacientes from 'views/pacientes';
import Equipamiento from 'views/equipamiento';
import Contacto from 'views/contacto';
import AreaMedica from 'views/area-medica';
import Covid from 'views/covid';
import FlechaArriba from 'views/flecha-arriba';
import ObrasSociales from 'views/obras-sociales';
import './app.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpened: false
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(){
    this.setState({
      menuOpened: true
    });
  }

  closeMenu(){
    this.setState({
      menuOpened: false
    });
  }

  render(){
    return (
      <div className="app">
        <BrowserRouter>
          <Header openMenu={this.openMenu} />
          <FullMenu closeMenu={this.closeMenu} menuOpened={this.state.menuOpened}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/institucional' component={Institucional} />
            <Route exact path='/estudios' component={EstudiosInicio} />
            <Route exact path='/estudios/tomografia' component={EstudioTomografia} />
            <Route exact path='/estudios/resonancia' component={EstudioResonancia} />
            <Route exact path='/estudios/ecografia' component={EstudioEcografia} />
            <Route exact path='/estudios/mamografia' component={EstudioMamografia} />
            <Route exact path='/pacientes' component={Pacientes} />
            <Route exact path='/equipamiento' component={Equipamiento} />
            <Route exact path='/area-medica' component={AreaMedica} />
            <Route exact path='/obras-sociales' component={ObrasSociales} />
            <Route exact path='/contacto' component={Contacto} />
            <Route exact path='/covid-19' component={Covid} />
          </Switch>
          <Footer />
          <FlechaArriba />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
