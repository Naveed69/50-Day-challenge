import { actionType } from "../Actions_Types/Action_Types";
export const Add_Task = (task) => {
  return { type: actionType.add_task, payload: { task: task } };
};

export const Remove_Task = (id) => {
  return { type: actionType.remove_task, payload: { id: id } };
};

export const Completed_Task = (id) => {
  return { type: actionType.completed, payload: { id: id } };
};
