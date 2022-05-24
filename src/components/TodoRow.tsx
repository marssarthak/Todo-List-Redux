import { FC } from "react";
import { TodoType } from "../models/TodoType";

type TodoItemType = {
  isDeleteOn: boolean;
  todoItem: TodoType;
  handelChecked: (id: string) => void;
};

const TodoItem: FC<TodoItemType> = ({
  isDeleteOn,
  handelChecked,
  todoItem,
}) => {
  return (
    <div className="flex items-center my-2">
      <input
        defaultChecked={todoItem.done}
        type="checkbox"
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        onChange={() => handelChecked(todoItem.id)}
        id={todoItem.id}
      />
      <label
        className={
          "text-gray-700 ml-3 font-medium text-sm " +
          (todoItem.done && "line-through ") +
          (isDeleteOn && "shake")
        }
        id={todoItem.id}
        htmlFor={todoItem.id}
      >
        {" "}
        {todoItem.action}
      </label>
    </div>
  );
};
export default TodoItem;
