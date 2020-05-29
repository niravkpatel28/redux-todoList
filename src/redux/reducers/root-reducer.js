import { combineReducers } from "redux";
import addTaskReducer from "./addTask.reducer";
import updateTaskReducer from "./updateTask.reducer";
import deleteTaskReducer from "./deleteTask.reducer";
const rootReducer = combineReducers({
  taskList: addTaskReducer,
  task: updateTaskReducer,
  deleteTask: deleteTaskReducer,
});

export default rootReducer;
