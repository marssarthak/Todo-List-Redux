import { StateType } from "../models/StateObjectType";

export const IncompleteTodoSelector = (S: StateType) => {
  return S.ToDoList.filter((item) => !item.done);
};

export const CompleteTodoSelector = (S: StateType) => {
  return S.ToDoList.filter((item) => item.done);
};

export const DeleteChecker = (S: StateType) => S.isDeleteOn;
