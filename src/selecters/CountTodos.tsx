import { StateType } from "../models/StateObjectType";
import { TodoType } from "../models/TodoType";

export const doneCount = (S: StateType) =>
  S.ToDoList.filter((data: TodoType) => data.done).length;

export const notDoneCount = (S: StateType) =>
  S.ToDoList.filter((data: TodoType) => !data.done).length;
