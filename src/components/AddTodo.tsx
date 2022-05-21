import { FC, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, TOGGLE_SHOW_CREATE_FORM } from "../actions";
import { StateType } from "../models/stateType";

type AddTodoProps = {};

const AddTodo: FC<AddTodoProps> = () => {
  const showTodoCreateForm = useSelector((S: StateType) => S.isCreateFormOn);
  const dispatch = useDispatch();

  const toggleShowTodoCreateForm = () => {
    dispatch({ type: TOGGLE_SHOW_CREATE_FORM });
  };

  const [textValue, setTextValue] = useState("");

  const handelSave = () => {
    textValue != "" && dispatch({ type: ADD_TODO, payload: textValue });
    setTextValue("");
    toggleShowTodoCreateForm();
  };

  return (
    <div>
      {!showTodoCreateForm && (
        <button
          onClick={toggleShowTodoCreateForm}
          className="bg-yellow-500 text-white p-2 font-medium text-sm rounded-full mt-2 px-3"
        >
          ➕ Add a todo{" "}
        </button>
      )}
      {showTodoCreateForm && (
        <div className="p-6 shadow-sm">
          <h1 className="font-medium text-gray-900">Create a todo</h1>
          <input
            value={textValue}
            onChange={(event) => {
              setTextValue(event.target.value);
            }}
            className="sm:w-1/4 w-full border border-gray-300 rounded-md p-2 text-sm mt-4"
            placeholder="Add any task here"
          ></input>
          <br />
          <div className="mt-4">
            <button
              onClick={handelSave}
              className="bg-yellow-500 font-medium px-4 p-2 rounded-md text-white"
            >
              Save
            </button>
            <button
              onClick={toggleShowTodoCreateForm}
              className="border font-medium px-4 p-2 rounded-md ml-3"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

AddTodo.defaultProps = {};

export default memo(AddTodo);

//props.changeDelete()
