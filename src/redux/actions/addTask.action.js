//create payload for action
import { ADD_TASK } from "./action";
const addTaskAction = (task) => {
  return {
    type: ADD_TASK,
    payload: [...task],
  };
};

export default addTaskAction;
