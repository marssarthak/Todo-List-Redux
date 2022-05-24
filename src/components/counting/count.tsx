import { FC, memo } from "react";
import { connect } from "react-redux";
import { StateType } from "../../models/StateObjectType";
import { doneCount, notDoneCount } from "../../selecters/CountTodos";

type countProps = {
  done: number;
  not_done: number;
};

const Count: FC<countProps> = ({ done, not_done }) => {
  return (
    <div className="flex items-center gap-5">
      <p className="text-yellow-500 ">Task Done ~ {done}</p>
      <p className="text-red-600">Task To Do ~ {not_done}</p>
    </div>
  );
};

const mapStateToProps = (s: StateType) => {
  return { done: doneCount(s), not_done: notDoneCount(s) };
};

export default memo(connect(mapStateToProps)(Count));
