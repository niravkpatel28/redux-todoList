import uniqid from "uniqid";
const generateTask = (task) => {
  return [
    {
      task: task,
      id: uniqid(),
      status: "incomplete",
    },
  ];
};

export default generateTask;
