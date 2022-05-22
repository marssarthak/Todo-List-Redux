import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../models/StateObjectType";
import { TodoType } from "../../models/TodoType";

type countProps = {};

const Count: FC<countProps> = (props) => {
  const doneCount = useSelector((S: StateType) =>
    S.ToDoList.filter((data: TodoType) => data.done)
  ).length;
  const toDoCount = useSelector((S: StateType) =>
    S.ToDoList.filter((data: TodoType) => !data.done)
  ).length;

  return (
    <div className="flex items-center gap-5">
      <p className="text-yellow-500 ">Task Done ~ {doneCount}</p>
      <p className="text-red-600">Task To Do ~ {toDoCount}</p>
    </div>
  );
};

Count.defaultProps = {};

export default memo(Count);
