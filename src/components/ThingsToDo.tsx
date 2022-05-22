import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TodoType } from "../models/TodoType";
import { StateType } from "../models/StateObjectType";
import TodoItem from "./TodoItem";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";

const ToDo: FC = () => {
  const todoList = useSelector((S: StateType) => {
    return S.ToDoList.filter((item) => !item.done);
  });
  const doneList = useSelector((S: StateType) =>
    S.ToDoList.filter((item) => item.done)
  );

  const showList = (listName: TodoType[], emptyText: string) =>
    listName.length > 0 ? (
      listName.map((item) => (
        <TodoItem
          isDone={item.done}
          id={item.id}
          key={item.id}
          action={item.action}
        />
      ))
    ) : (
      <p className="text-slate-500">{emptyText}</p>
    );

  const showTodoDelete = useSelector((S: StateType) => !S.isCreateFormOn);
  return (
    <div>
      <h1 className="font-medium text-lg mt-8 mb-3">Things to do</h1>
      {showList(todoList, "No todos here!")}
      <div className={showTodoDelete ? "flex items-center gap-2" : " "}>
        <AddTodo />
        {showTodoDelete && <DeleteTodo />}
      </div>
      <h1 className="font-medium text-lg mt-4 mb-3">Things done</h1>
      {showList(doneList, "No todos here!")}
    </div>
  );
};

export default ToDo;
