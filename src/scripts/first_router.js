import React from 'react';
import {Route, NavLink, BrowserRouter as Router} from 'react-router-dom';


class ThreeRoute extends React.Component {
  render() {
    // const fishArray=['bacalos', 'salmon', 'tuna'];

    return (
        <React.Fragment>
          <div style={{fontSize: '2.5vw', textAlign: 'center'}}>Show Fishes</div>

          <div className="d-flex justify-content-around" style={{width: '50%', margin: '5vw 0'}}>
            <NavLink to='/contact/bacalos'>Bacalos</NavLink>
            <NavLink to='/contact/salmon'>Salmon</NavLink>
            <NavLink to='/contact/tuna'>Tuna</NavLink>
          </div>

          <div style={{margin: '2vw', textAlign: 'center'}}>
            <Route exact path="/contact/bacalos" render={() => <h4>This is the bacalos fish.</h4>}/>
            <Route exact path="/contact/salmon" render={() => <h4>This is the salmon fish.</h4>}/>
            <Route exact path="/contact/tuna" render={() => <h4>This is the tuna fish.</h4>}/>
          </div>
        </React.Fragment>
    )
  }
}


export class FirstRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {

    return (
      <Router>
        <React.Fragment>
          <div className="d-flex" style={{fontSize: '2vw'}}>
            <NavLink to='/dist' style={{margin: '5vw'}}>Home</NavLink>
            <NavLink to='/contact' style={{margin: '5vw'}}>Contact</NavLink>
          </div>

          <div className="jumbotron">
              <Route exact path='/dist' render={() => <h2>This is home</h2>}/>
              <Route path='/contact' component={ThreeRoute}/>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}
