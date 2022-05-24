import { FC } from "react";
import { TodoType } from "../models/TodoType";

type TodoItemType = {
  key: string;
  isDeleteOn: boolean;
  todoItem: TodoType;
  handelChecked: (id: string) => void;
};

const TodoItem: FC<TodoItemType> = (props) => {
  const isDeleteOn = props.isDeleteOn;

  return (
    <div className="flex items-center my-2">
      <input
        defaultChecked={props.todoItem.done}
        type="checkbox"
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        onChange={() => props.handelChecked(props.todoItem.id)}
        id={props.todoItem.id}
      />
      <label
        className={
          "text-gray-700 ml-3 font-medium text-sm " +
          (props.todoItem.done ? "line-through " : "") +
          (isDeleteOn && "shake")
        }
        id={props.todoItem.id}
        htmlFor={props.todoItem.id}
      >
        {" "}
        {props.todoItem.action}
      </label>
    </div>
  );
};
export default TodoItem;
