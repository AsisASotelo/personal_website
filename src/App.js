import React from 'react';
import Main from './component/MainComponent';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';

import Header from './component/HeaderComponent';
import Home from './component/Home_Component';
import Footer from './component/FooterComponent';
import './App.css';

class App extends React.Component {
  render(){

    return(
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
