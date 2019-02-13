import React from 'react';

export class ManageTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inputVal: '', tasks: [], isDuplicate: false};
  }

  updateValue(event) {
    this.setState({inputVal: event.target.value});
  }

  addTask(event) {
    event.preventDefault();
    const temporary = [...this.state.tasks];

    if (temporary.includes(this.state.inputVal)) {
      this.setState({isDuplicate: true});
      return false;
    }

    temporary.push(this.state.inputVal);
    this.setState({tasks: temporary, inputVal: '', isDuplicate: false});
  }

  setDone(event) {
    event.target.parentElement.classList.toggle('setToDone');
  }

  deleteTask(event) {
    const parentOfDeleteButton = event.target.parentElement; // the li element of the clicked button
    const parentText = parentOfDeleteButton.getAttribute('text'); // 'ruby'
    const tempTasks = [...this.state.tasks];
    delete tempTasks[tempTasks.indexOf(parentText)];
    this.setState({tasks: tempTasks});
  }

  render() {
    return (
      <React.Fragment>

        <form onSubmit={this.addTask.bind(this)}>
          <div className="input-group mb-3 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">Define your task</span>
            </div>
            <input type="text" className="form-control" onChange={this.updateValue.bind(this)} value={this.state.inputVal}/>
            <button type="submit" className="btn btn-lg btn-primary">Add a task</button>
          </div>
        </form>

        {this.state.isDuplicate && <div className="alert alert-danger"><strong>Failure!</strong> Task has been already defined!</div>}

        <ul className="list-group">
        {this.state.tasks.map((taskDescription, index) => {
          return (
            taskDescription && <li text={taskDescription} className="list-group-item" key={index}>{taskDescription}
              <button onClick={this.setDone.bind(this)} className="btn btn-warning float-right">Set to Done</button>
              <button onClick={this.deleteTask.bind(this)} className="btn btn-danger float-right mx-3">Delete task</button>
            </li>
          )
        })
      }
        </ul>

      </React.Fragment>
    )
  }
}
