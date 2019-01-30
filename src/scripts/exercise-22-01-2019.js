import '../styles/main.scss';
import React from 'react';

export class WarmUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isSeen: false, counter: 0}
  }

  changeParagraph(event) {

    this.setState({isSeen: true, counter: this.state.counter + 1});

    setTimeout(() => {
      this.setState({isSeen: false});
    }, 1000);

  }


  render() {

    return (
      <React.Fragment>

        <form>
          <div className="input-group mb-3 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">Large</span>
            </div>
            <input type="text" className="form-control">
          </div>
        </form>

        <p className="jumbotron">Wellcome back,</p>

      </React.Fragment>
    )

  }
}
