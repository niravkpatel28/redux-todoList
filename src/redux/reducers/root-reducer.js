import { combineReducers } from "redux";
import addTaskReducer from "./addTask.reducer";
import updateTaskReducer from "./updateTask.reducer";
const rootReducer = combineReducers({
  taskList: addTaskReducer,
  task: updateTaskReducer,
});

export default rootReducer;
