import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.css';
import LoadingMain from "./LoadingMain";
import Navbar from './Navbar';
import Main_section from './Main_section';
import Second_section from './Second_section';
import login from "./component/login"
import PageNotFound from "./component/PageNotFound"
import pilot_area from "./auth/panel/pilot_area";
import flight_booking from "./auth/panel/flight_booking";

class App extends React.Component {

  constructor() {
    super() 
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            isLoading: false
        })
    }, 1500)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
        <LoadingMain /> :
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Main_section} exact/>
            <Route path="/login" component={login} />
            <Route path="/panel/pilot_area" component={pilot_area} />
            <Route path="/panel/flight_booking" component={flight_booking} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        }
      </div>
    );
  }    
}

export default App;
