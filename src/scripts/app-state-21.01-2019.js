import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { PlayerInfo } from './player';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {counter: 0}
    }

  handleClick(event) {
    console.log('You clicked the button');
    this.refs.myButton.innerText='Button clicked';
    this.refs.myName.style.display='none';
    this.refs.clear.innerText='You are gone!';

    this.setState({counter: this.state.counter + 1});
  }


  render() {

      return (
        <React.Fragment>
          <button style={{margin: '5vw'}} className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)} ref="myButton">Click me and see</button>
          <p ref="myName">If i click you will disapear!</p>
          <p ref="clear" style={{color: 'red'}}></p>

          {this.state.counter > 0 && <p className="lead">Officially we have now <span style={{color: 'red'}}>{this.state.counter}</span> subscriber!</p>}
        </React.Fragment>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
