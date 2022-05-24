import { FC, memo } from "react";
import { TodoType } from "../models/TodoType";
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
