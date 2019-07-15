import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.css';
import LoadingMain from "./LoadingMain";
import Navbar from './Navbar';
import Main_section from './Main_section';
import Second_section from './Second_section';
import login from "./component/login"
import PageNotFound from "./component/PageNotFound"

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
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        }
      </div>
    );
  }    
}

export default App;
