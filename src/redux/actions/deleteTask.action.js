import { DELETE_TASK } from "./action";

const deleteTaskAction = (taskList) => {
  return {
    type: DELETE_TASK,
    payload: [...taskList],
  };
};

export default deleteTaskAction;
