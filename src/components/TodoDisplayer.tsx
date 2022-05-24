import { FC, memo } from "react";
import { connect, useDispatch } from "react-redux";
import { StateType } from "../models/StateObjectType";
import { TodoType } from "../models/TodoType";
import { CHECKED, DELETE_TODO } from "../actions";
import {
  CompleteTodoSelector,
  DeleteChecker,
  IncompleteTodoSelector,
} from "../selecters/TodoSelector";
import TodoRow from "./TodoRow";

type TodoDisplayerProps = {
  emptyText: string;
  listName: TodoType[];
  isDeleteOn: boolean;
};

const TodoDisplayer: FC<TodoDisplayerProps> = ({
  emptyText,
  listName,
  isDeleteOn,
}) => {
  const dispatch = useDispatch();
  const handelChecked = (id: string) => {
    isDeleteOn
      ? dispatch({ type: DELETE_TODO, payload: id })
      : dispatch({ type: CHECKED, payload: id });
  };

  return (
    <>
      {listName.length > 0 ? (
        listName.map((item) => (
          <TodoRow
            key={item.id}
            handelChecked={handelChecked}
            isDeleteOn={isDeleteOn}
            todoItem={item}
          />
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

export const CompleteTodoList = memo(
  connect(completeTodoMapper)(TodoDisplayer)
);
export const IncompleteTodoList = memo(
  connect(incompleteTodoMapper)(TodoDisplayer)
);
