import { DELETE_TASK } from "../actions/action";
const INITIAL_STATE = {
  taskList: [],
};

const deleteTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_TASK:
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

export default deleteTaskReducer;
