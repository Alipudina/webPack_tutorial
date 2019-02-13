import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './navbar';
import { PlayerInfo } from './player';
import { Warmup } from './warmup';
import {FormClass} from './formName';
import {Photogallery} from './photogallery';
import {ManageTask} from './manageTask';
import {FirstRouter} from './first_router';
import {FirstRouterRefactor} from './first_router_refactor';
import {Blogsite} from './blogSite';



class App extends React.Component {

  render() {

    //     return <FormClass />

    //     return <Warmup />

    // return <Photogallery />

    // return <ManageTask />
    // return <FirstRouter />
    // return <FirstRouterRefactor />
    return <Blogsite />
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
