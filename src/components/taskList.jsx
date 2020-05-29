import React from "react";
import { connect } from "react-redux";
import deleteTaskAction from "../redux/actions/deleteTask.action";
import store from "../redux/store";
const TaskList = (props) => {
  // take the tasklist from the store and render the list
  console.log("are props getting updated", props);
  // remove tasks
  const deleteTask = (id) => {
    console.log(id);
    store.dispatch(deleteTaskAction([]), store.getState());
  };
  return (
    <div>
      {props.taskList.map((task) => (
        <p key={task.id}>
          {task.task}{" "}
          <button onClick={() => deleteTask(task.id)}>Delete </button>
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  //this is the root reducer
  return {
    taskList: state.taskList.taskList,
  };
};

export default connect(mapStateToProps)(TaskList);
