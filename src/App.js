import React from "react";
import "./App.css";
import { connect } from "react-redux";
import store from "./redux/store";
import generateTask from "./helpers/generateTask";
// import { ADD_TASK } from "./redux/actions/action";
import updateTaskAction from "./redux/actions/updateTask.action";
import addTaskAction from "./redux/actions/addTask.action";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.task = "";
  }
  onChangeHandler = (event) => {
    this.task = event.target.value;
    store.dispatch(updateTaskAction(this.task));
  };

  addTask = () => {
    this.props.addTask(generateTask(this.task));
    this.props.updateTask("");
  };

  pressEnter = (event) => {
    if (event.key === "Enter") {
      this.addTask();
    }
  };
  render() {
    // console.log(this.props.task);
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeHandler}
          value={this.props.task}
          onKeyPress={this.pressEnter}
        />
        <button onClick={this.addTask}>Add</button>
        {this.props.taskList.map((task) => (
          <p key={task.id}> {task.task} </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList.taskList,
    task: state.task.task,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTaskAction(task)),
    updateTask: (text) => dispatch(updateTaskAction(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
