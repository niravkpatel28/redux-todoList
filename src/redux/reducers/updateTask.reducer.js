import { UPDATE_TASK } from "../actions/action";

//this will add initial task
const INITIAL_STATE = {
  task: "",
};

const updateTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      return {
        ...state,
        task: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default updateTaskReducer;
