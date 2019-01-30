import React from 'react';

export class ManageTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tasks: [], inputVal: ''}
  }

  addTask(ev) {
    const newArray = [...this.state.tasks];
    ev.preventDefault();
    newArray.push(this.state.inputVal);
    this.setState({tasks: newArray, inputVal: ''});
  }

  updateValue(ev) {
    this.setState({inputVal: ev.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addTask.bind(this)}>
          <div className="input-group mb-3 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">What to do?</span>
            </div>
            <input onChange={this.updateValue.bind(this)} type="text" className="form-control" value={this.state.inputVal} />
            <button className="btn btn-lg btn-info">Create a task</button>
          </div>
        </form>
        <ul className="list-group row">
        {this.state.tasks.map((task, index) => <li style={{height: '4vw'}} className="list-group-item d-flex justify-content-between row px-5" key={index}>{task}
        <a className="d-flex justify-content-between col-lg-3 border m-0"><span className="mx-4 border border-info">add to done!</span><span>Delete</span></a>
        </li>)}
        </ul>
      </React.Fragment>
    )
  }
}
