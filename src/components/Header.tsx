import { FC, memo } from "react";

const Header: FC = () => {
  return (
    <header>
      <h1 className="text-xl font-medium py-5 px-4 sm:px-40">XTodo</h1>
      <hr />
    </header>
  );
};

export default memo(Header);
