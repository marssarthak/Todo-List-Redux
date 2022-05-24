import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../models/StateObjectType";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";
import { CHECKED, DELETE_TODO } from "../actions";
import TodoDisplayer from "./TodoDisplayer";
import {
  CompleteTodoSelector,
  IncompleteTodoSelector,
} from "../selecters/TodoSelector";

const ToDo: FC = () => {
  const todoList = useSelector(IncompleteTodoSelector);
  const doneList = useSelector(CompleteTodoSelector);
  const isDeleteOn = useSelector((S: StateType) => S.isDeleteOn);
  const showTodoDelete = useSelector((S: StateType) => !S.isCreateFormOn);

  const dispatch = useDispatch();

  const handelChecked = (id: string) => {
    isDeleteOn
      ? dispatch({ type: DELETE_TODO, payload: id })
      : dispatch({ type: CHECKED, payload: id });
  };

  return (
    <div>
      <h1 className="font-medium text-lg mt-8 mb-3">Things to do</h1>
      <TodoDisplayer
        handelChecked={handelChecked}
        emptyText="No todos here!"
        isDeleteOn={isDeleteOn}
        listName={todoList}
      />
      <div className={showTodoDelete ? "flex items-center gap-2" : " "}>
        <AddTodo />
        {showTodoDelete && <DeleteTodo />}
      </div>
      <h1 className="font-medium text-lg mt-4 mb-3">Things done</h1>
      <TodoDisplayer
        handelChecked={handelChecked}
        emptyText="No todos here!"
        isDeleteOn={isDeleteOn}
        listName={doneList}
      />
    </div>
  );
};

export default ToDo;
