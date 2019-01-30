import React from 'react';

export class FormClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formValue: 'Jake'};
  }

  handleChange(ev) {
    this.setState({formValue: ev.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Write your name here</span>
            </div>
            <input type="text" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Name" value={this.state.formValue} />
          </div>
        </form>

        <Jumbotron formValue={this.state.formValue}/>
      </React.Fragment>
    )
  }
}
// ##########################################################################################################

class Jumbotron extends React.Component {

  render() {

    return (
      <div className="jumbotron">
        <p className="lead">{this.props.formValue.length === 0 ? 'put something' : `Hello, welcome back ${this.props.formValue}`}</p>
      </div>
    )
  }
}
