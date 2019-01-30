import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { InstaBox } from './instabox';
import { NavBar } from './navbar';
import { BlogPost } from './blogs';
import { PlayerInfo } from './player';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isParagraphSeen: false}
  }

  handleClick(event) {
    this.setState({isParagraphSeen: !this.state.isParagraphSeen});
  }

  render() {

      return (
        <React.Fragment>
          <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>
          {this.state.isParagraphSeen ? 'Hide Paragraph' : 'Show Paragraph'}
          </button>
          {this.state.isParagraphSeen && <p className="lead">Now You see me!</p>}
        </React.Fragment>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
