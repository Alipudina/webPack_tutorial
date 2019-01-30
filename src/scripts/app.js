import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './navbar';
import { PlayerInfo } from './player';
import { Warmup } from './warmup';
import {FormClass} from './formName';
import {Photogallery} from './photogallery';
import {ManageTask} from './manageTask';



class App extends React.Component {

  render() {

    //     return <FormClass />

    //     return <Warmup />

    // return <Photogallery />

    return <ManageTask />
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
