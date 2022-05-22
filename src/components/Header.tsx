import { FC, memo } from "react";
import Count from "./counting/count";

const Header: FC = () => {
  return (
    <header>
      <div className=" py-5 px-4 sm:px-40 items-center font-medium flex justify-between">
        <h1 className="text-xl font-medium">XTodo</h1>
        <Count />
      </div>
      <hr />
    </header>
  );
};

export default memo(Header);
