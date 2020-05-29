import { ADD_TASK } from "../actions/action";

//this will add task to the state
const INITIAL_STATE = {
  taskList: [],
};

const addTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, ...action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default addTaskReducer;
