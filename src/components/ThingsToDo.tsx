import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../models/StateObjectType";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";
import { CompleteTodoList, IncompleteTodoList } from "./TodoDisplayer";

const ToDo: FC = () => {
  const showTodoDelete = useSelector((S: StateType) => !S.isCreateFormOn);

  return (
    <div>
      <h1 className="font-medium text-lg mt-8 mb-3">Things to do</h1>

      <IncompleteTodoList emptyText="No todos here!" />

      <div className={showTodoDelete ? "flex items-center gap-2" : " "}>
        <AddTodo />
        {showTodoDelete && <DeleteTodo />}
      </div>

      <h1 className="font-medium text-lg mt-4 mb-3">Things done</h1>

      <CompleteTodoList emptyText="No todos here!" />
    </div>
  );
};

export default memo(ToDo);
