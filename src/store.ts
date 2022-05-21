import { createStore, Reducer } from "redux";
import { TodoType } from "./models/TodoType";
import { StateType } from "./models/stateType";
import uuid from "../node_modules/react-uuid/uuid";
import {
  ADD_TODO,
  CHECKED,
  TOGGLE_SHOW_CREATE_FORM,
  TOGGLE_DELETE_ON,
  DELETE_TODO,
} from "./actions";

const savedTotalList: TodoType[] = JSON.parse(
  localStorage.getItem("listState")
) || [
  { action: "Buy milk", id: uuid(), done: false },
  { action: "Buy eggs", id: uuid(), done: false },
  { action: "submit assignment", id: uuid(), done: false },
];

const initialState: StateType = {
  ToDoList: savedTotalList,
  isCreateFormOn: false,
  isDeleteOn: false,
};

const reducer: Reducer<StateType> = (
  currentState = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case CHECKED: {
      const newState = currentState.ToDoList.map((item) =>
        item.id == action.payload ? { ...item, done: !item.done } : item
      );
      localStorage.setItem("listState", JSON.stringify(newState));
      return { ...currentState, ToDoList: newState };
    }

    case ADD_TODO: {
      const ToDo = action.payload;
      const ToDoListNew = [
        ...currentState.ToDoList,
        { action: ToDo, id: uuid(), done: false },
      ];
      localStorage.setItem("listState", JSON.stringify(ToDoListNew));
      return {
        ...currentState,
        ToDoList: ToDoListNew,
      };
    }
    case TOGGLE_SHOW_CREATE_FORM: {
      return {
        ...currentState,
        isCreateFormOn: !currentState.isCreateFormOn,
      };
    }
    case TOGGLE_DELETE_ON: {
      return {
        ...currentState,
        isDeleteOn: !currentState.isDeleteOn,
      };
    }
    case DELETE_TODO: {
      console.log("delete is on");
      const payload = action.payload;
      const newTodoList = currentState.ToDoList.filter(
        (item) => item.id != payload
      );

      localStorage.setItem("listState", JSON.stringify(newTodoList));
      return {
        ...currentState,
        ToDoList: newTodoList,
      };
    }
    default: {
      return currentState;
    }
  }
};

const store = createStore(reducer);

export default store;
