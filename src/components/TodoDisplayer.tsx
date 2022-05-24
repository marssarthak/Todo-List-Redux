import { FC, memo } from "react";
import { connect } from "react-redux";
import { StateType } from "../models/StateObjectType";
import { TodoType } from "../models/TodoType";
import {
  CompleteTodoSelector,
  DeleteChecker,
  IncompleteTodoSelector,
} from "../selecters/TodoSelector";
import TodoItem from "./TodoItem";

type TodoDisplayerProps = {
  emptyText: string;
  listName: TodoType[];
  isDeleteOn: boolean;
  handelChecked: (id: string) => void;
};

const TodoDisplayer: FC<TodoDisplayerProps> = ({
  emptyText,
  listName,
  ...rest
}) => {
  return (
    <>
      {listName.length > 0 ? (
        listName.map((item) => (
          <TodoItem key={item.id} {...rest} todoItem={item} />
        ))
      ) : (
        <p className="text-slate-500">{emptyText}</p>
      )}
    </>
  );
};

TodoDisplayer.defaultProps = {};

export default memo(TodoDisplayer);

const completeTodoMapper = (S: StateType) => {
  return {
    listName: CompleteTodoSelector(S),
    isDeleteOn: DeleteChecker(S),
  };
};

const incompleteTodoMapper = (S: StateType) => {
  return {
    listName: IncompleteTodoSelector(S),
    isDeleteOn: DeleteChecker(S),
  };
};

export const CompleteTodoList = connect(completeTodoMapper)(TodoDisplayer);
export const IncompleteTodoList = connect(incompleteTodoMapper)(TodoDisplayer);
