export type StateType = {
  ToDoList: {
    action: string;
    id: string;
    done: boolean;
  }[];
  isCreateFormOn: boolean;
  isDeleteOn: boolean;
};
