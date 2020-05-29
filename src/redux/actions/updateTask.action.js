import { UPDATE_TASK } from "./action";

const updateTaskAction = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
};

export default updateTaskAction;
