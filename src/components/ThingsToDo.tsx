import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../models/StateObjectType";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";
import { CHECKED, DELETE_TODO } from "../actions";
import { CompleteTodoList, IncompleteTodoList } from "./TodoDisplayer";

const ToDo: FC = () => {
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

      <IncompleteTodoList
        emptyText="No todos here!"
        handelChecked={handelChecked}
      />

      <div className={showTodoDelete ? "flex items-center gap-2" : " "}>
        <AddTodo />
        {showTodoDelete && <DeleteTodo />}
      </div>

      <h1 className="font-medium text-lg mt-4 mb-3">Things done</h1>

      <CompleteTodoList
        emptyText="No todos here!"
        handelChecked={handelChecked}
      />
    </div>
  );
};

export default ToDo;
