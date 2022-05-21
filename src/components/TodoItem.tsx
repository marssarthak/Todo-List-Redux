import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHECKED, DELETE_TODO } from "../actions";
import { StateType } from "../models/stateType";

type TodoItemType = {
  isDone: boolean;
  id: string;
  key: string;
  action: string;
};

const TodoItem: FC<TodoItemType> = (props) => {
  const isDeleteOn = useSelector((S: StateType) => S.isDeleteOn);
  const dispatch = useDispatch();

  const handelClick = () => {
    isDeleteOn
      ? dispatch({ type: DELETE_TODO, payload: props.id })
      : dispatch({ type: CHECKED, payload: props.id });
  };

  return (
    <div className="flex items-center my-2">
      <input
        defaultChecked={props.isDone}
        type="checkbox"
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        onChange={handelClick}
        id={props.id}
      />
      <label
        className={
          "text-gray-700 ml-3 font-medium text-sm " +
          (props.isDone ? "line-through " : "") +
          (isDeleteOn && "shake")
        }
        id={props.id}
        htmlFor={props.id}
      >
        {" "}
        {props.action}
      </label>
    </div>
  );
};
export default TodoItem;

//   props.shaking ? props.handelDelete(props.id) : props.onChecked(props.id);
