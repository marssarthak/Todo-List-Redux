import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_DELETE_ON } from "../actions";
import { StateType } from "../models/StateObjectType";

type DeleteTodoProps = {};

const DeleteTodo: FC<DeleteTodoProps> = (props) => {
  let imageLink = useSelector((S: StateType) => !S.isDeleteOn)
    ? "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIj48L3BhdGg+PGcgaWQ9Im9yaWdpbmFsLWljb24iIGZpbGw9IiNmMWM0MGYiIHN0cm9rZT0ibm9uZSIgb3BhY2l0eT0iMCIgdmlzaWJpbGl0eT0iaGlkZGVuIj48cGF0aCBkPSJNODUuOTEwNDIsMTQuMjU0OTVjLTMuMTYyMDMsMC4wNDk0MyAtNS42ODcwNSwyLjY0OTYgLTUuNjQzNzUsNS44MTE3MnYyLjg2NjY3aC0zMS41MzMzM2MtMS41MzQwNiwtMC4wMjA4MiAtMy4wMTI0OSwwLjU3NCAtNC4xMDQ2OCwxLjY1MTQ2Yy0xLjA5MjE5LDEuMDc3NDYgLTEuNzA3MDMsMi41NDc2NyAtMS43MDcwNCw0LjA4MTg3aC04LjUyMTYxYy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTAzLjJjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzaC04LjUyMTYxYy0wLjAwMDAxLC0xLjUzNDIxIC0wLjYxNDg2LC0zLjAwNDQyIC0xLjcwNzA0LC00LjA4MTg3Yy0xLjA5MjE5LC0xLjA3NzQ2IC0yLjU3MDYxLC0xLjY3MjI4IC00LjEwNDY4LC0xLjY1MTQ2aC0zMS41MzMzM3YtMi44NjY2N2MwLjAyMTIyLC0xLjU0OTcyIC0wLjU4NTgxLC0zLjA0MjAzIC0xLjY4Mjc5LC00LjEzNjljLTEuMDk2OTgsLTEuMDk0ODcgLTIuNTkwNDUsLTEuNjk5MDMgLTQuMTQwMTMsLTEuNjc0ODJ6TTM0LjQsNTEuNmwxMC4yNzk2OSw4Ny4zNDM3NWMwLjY3NjUzLDUuNzczNDcgNS41NjM0OCwxMC4xMjI5MiAxMS4zNzcwOCwxMC4xMjI5Mmg1OS44ODY0NmM1LjgxMzYsMCAxMC42OTQ4MiwtNC4zNDk0NSAxMS4zNzcwOCwtMTAuMTIyOTJsMTAuMjc5NjksLTg3LjM0Mzc1eiI+PC9wYXRoPjwvZz48ZyBpZD0ic3VidHJhY3RlZC1pY29uIiBmaWxsPSIjZjFjNDBmIiBzdHJva2U9Im5vbmUiPjxwYXRoIGQ9Ik05MC4wNTA1NCwxNS45Mjk3N2MxLjA5Njk4LDEuMDk0ODcgMS43MDQwMSwyLjU4NzE3IDEuNjgyNzksNC4xMzY5djIuODY2NjdoMzEuNTMzMzNjMS41MzQwNiwtMC4wMjA4MiAzLjAxMjQ5LDAuNTc0IDQuMTA0NjgsMS42NTE0NmMxLjA5MjE5LDEuMDc3NDYgMS43MDcwMywyLjU0NzY3IDEuNzA3MDQsNC4wODE4N2g4LjUyMTYxYzIuMDY3NjUsLTAuMDI5MjQgMy45OTA4NywxLjA1NzA5IDUuMDMzMjIsMi44NDNjMS4wNDIzNiwxLjc4NTkyIDEuMDQyMzYsMy45OTQ3NCAwLDUuNzgwNjZjLTEuMDQyMzYsMS43ODU5MiAtMi45NjU1OCwyLjg3MjI1IC01LjAzMzIyLDIuODQzaC0xMDMuMmMtMi4wNjc2NSwwLjAyOTI0IC0zLjk5MDg3LC0xLjA1NzA5IC01LjAzMzIyLC0yLjg0M2MtMS4wNDIzNiwtMS43ODU5MiAtMS4wNDIzNiwtMy45OTQ3NCAwLC01Ljc4MDY2YzEuMDQyMzYsLTEuNzg1OTIgMi45NjU1OCwtMi44NzIyNSA1LjAzMzIyLC0yLjg0M2g4LjUyMTYxYzAuMDAwMDEsLTEuNTM0MjEgMC42MTQ4NiwtMy4wMDQ0MiAxLjcwNzA0LC00LjA4MTg3YzEuMDkyMTksLTEuMDc3NDYgMi41NzA2MSwtMS42NzIyOCA0LjEwNDY4LC0xLjY1MTQ2aDMxLjUzMzMzdi0yLjg2NjY3Yy0wLjA0MzMsLTMuMTYyMTIgMi40ODE3MiwtNS43NjIyOSA1LjY0Mzc1LC01LjgxMTcyYzEuNTQ5NjgsLTAuMDI0MiAzLjA0MzE1LDAuNTc5OTYgNC4xNDAxMywxLjY3NDgyek0xMzcuNiw1MS42bC0zLjI3ODQ3LDI3Ljg1NjI0Yy0xLjQ2ODI2LC0wLjEyNTUyIC0yLjk1NDA3LC0wLjE4OTU4IC00LjQ1NDg3LC0wLjE4OTU4Yy0yOC41MDA0LDAgLTUxLjYsMjMuMDk5NiAtNTEuNiw1MS42YzAsNi40MDY1OCAxLjE2NzIzLDEyLjU0MDI2IDMuMzAwNjUsMTguMmgtMjUuNTEwNTRjLTUuODEzNiwwIC0xMC43MDA1NSwtNC4zNDk0NSAtMTEuMzc3MDgsLTEwLjEyMjkybC0xMC4yNzk2OSwtODcuMzQzNzV6Ij48L3BhdGg+PC9nPjxnIHN0cm9rZT0ibm9uZSI+PGcgaWQ9IkxheWVyXzEiIGZpbGw9IiNjY2NjY2MiPjxwYXRoIGQ9Ik0xMjkuODY2NjcsOTAuNzMzMzNjLTIyLjE2NTA3LDAgLTQwLjEzMzMzLDE3Ljk2ODI3IC00MC4xMzMzMyw0MC4xMzMzM2MwLDIyLjE2NTA3IDE3Ljk2ODI3LDQwLjEzMzMzIDQwLjEzMzMzLDQwLjEzMzMzYzIyLjE2NTA3LDAgNDAuMTMzMzMsLTE3Ljk2ODI3IDQwLjEzMzMzLC00MC4xMzMzM2MwLC0yMi4xNjUwNyAtMTcuOTY4MjcsLTQwLjEzMzMzIC00MC4xMzMzMywtNDAuMTMzMzN6TTE0Ny4wNjY2NywxMzYuNmgtMzQuNGMtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2gzNC40YzMuMTY0OCwwIDUuNzMzMzMsMi41NjI4IDUuNzMzMzMsNS43MzMzM2MwLDMuMTcwNTMgLTIuNTY4NTMsNS43MzMzMyAtNS43MzMzMyw1LjczMzMzeiI+PC9wYXRoPjwvZz48ZyBpZD0iTGF5ZXJfMSIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMCI+PHBhdGggZD0iTTEyOS44NjY2Nyw3OS4yNjY2N2MtMjguNTAwNCwwIC01MS42LDIzLjA5OTYgLTUxLjYsNTEuNmMwLDI4LjUwMDQgMjMuMDk5Niw1MS42IDUxLjYsNTEuNmMyOC41MDA0LDAgNTEuNiwtMjMuMDk5NiA1MS42LC01MS42YzAsLTI4LjUwMDQgLTIzLjA5OTYsLTUxLjYgLTUxLjYsLTUxLjZ6Ij48L3BhdGg+PC9nPjwvZz48cGF0aCBkPSJNODkuNzMzMzMsMTcxdi04MC4yNjY2N2g4MC4yNjY2N3Y4MC4yNjY2N3oiIGlkPSJvdmVybGF5LWRyYWciIGZpbGw9IiNmZjAwMDAiIHN0cm9rZT0ibm9uZSIgb3BhY2l0eT0iMCI+PC9wYXRoPjwvZz48L3N2Zz4="
    : "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIj48L3BhdGg+PGcgaWQ9Im9yaWdpbmFsLWljb24iIGZpbGw9IiNlNzRjM2MiIHN0cm9rZT0ibm9uZSIgb3BhY2l0eT0iMCIgdmlzaWJpbGl0eT0iaGlkZGVuIj48cGF0aCBkPSJNODUuOTEwNDIsMTQuMjU0OTVjLTMuMTYyMDMsMC4wNDk0MyAtNS42ODcwNSwyLjY0OTYgLTUuNjQzNzUsNS44MTE3MnYyLjg2NjY3aC0zMS41MzMzM2MtMS41MzQwNiwtMC4wMjA4MiAtMy4wMTI0OSwwLjU3NCAtNC4xMDQ2OCwxLjY1MTQ2Yy0xLjA5MjE5LDEuMDc3NDYgLTEuNzA3MDMsMi41NDc2NyAtMS43MDcwNCw0LjA4MTg3aC04LjUyMTYxYy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTAzLjJjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzaC04LjUyMTYxYy0wLjAwMDAxLC0xLjUzNDIxIC0wLjYxNDg2LC0zLjAwNDQyIC0xLjcwNzA0LC00LjA4MTg3Yy0xLjA5MjE5LC0xLjA3NzQ2IC0yLjU3MDYxLC0xLjY3MjI4IC00LjEwNDY4LC0xLjY1MTQ2aC0zMS41MzMzM3YtMi44NjY2N2MwLjAyMTIyLC0xLjU0OTcyIC0wLjU4NTgxLC0zLjA0MjAzIC0xLjY4Mjc5LC00LjEzNjljLTEuMDk2OTgsLTEuMDk0ODcgLTIuNTkwNDUsLTEuNjk5MDMgLTQuMTQwMTMsLTEuNjc0ODJ6TTM0LjQsNTEuNmwxMC4yNzk2OSw4Ny4zNDM3NWMwLjY3NjUzLDUuNzczNDcgNS41NjM0OCwxMC4xMjI5MiAxMS4zNzcwOCwxMC4xMjI5Mmg1OS44ODY0NmM1LjgxMzYsMCAxMC42OTQ4MiwtNC4zNDk0NSAxMS4zNzcwOCwtMTAuMTIyOTJsMTAuMjc5NjksLTg3LjM0Mzc1eiI+PC9wYXRoPjwvZz48ZyBpZD0ic3VidHJhY3RlZC1pY29uIiBmaWxsPSIjZTc0YzNjIiBzdHJva2U9Im5vbmUiPjxwYXRoIGQ9Ik05MC4wNTA1NCwxNS45Mjk3N2MxLjA5Njk4LDEuMDk0ODcgMS43MDQwMSwyLjU4NzE3IDEuNjgyNzksNC4xMzY5djIuODY2NjdoMzEuNTMzMzNjMS41MzQwNiwtMC4wMjA4MiAzLjAxMjQ5LDAuNTc0IDQuMTA0NjgsMS42NTE0NmMxLjA5MjE5LDEuMDc3NDYgMS43MDcwMywyLjU0NzY3IDEuNzA3MDQsNC4wODE4N2g4LjUyMTYxYzIuMDY3NjUsLTAuMDI5MjQgMy45OTA4NywxLjA1NzA5IDUuMDMzMjIsMi44NDNjMS4wNDIzNiwxLjc4NTkyIDEuMDQyMzYsMy45OTQ3NCAwLDUuNzgwNjZjLTEuMDQyMzYsMS43ODU5MiAtMi45NjU1OCwyLjg3MjI1IC01LjAzMzIyLDIuODQzaC0xMDMuMmMtMi4wNjc2NSwwLjAyOTI0IC0zLjk5MDg3LC0xLjA1NzA5IC01LjAzMzIyLC0yLjg0M2MtMS4wNDIzNiwtMS43ODU5MiAtMS4wNDIzNiwtMy45OTQ3NCAwLC01Ljc4MDY2YzEuMDQyMzYsLTEuNzg1OTIgMi45NjU1OCwtMi44NzIyNSA1LjAzMzIyLC0yLjg0M2g4LjUyMTYxYzAuMDAwMDEsLTEuNTM0MjEgMC42MTQ4NiwtMy4wMDQ0MiAxLjcwNzA0LC00LjA4MTg3YzEuMDkyMTksLTEuMDc3NDYgMi41NzA2MSwtMS42NzIyOCA0LjEwNDY4LC0xLjY1MTQ2aDMxLjUzMzMzdi0yLjg2NjY3Yy0wLjA0MzMsLTMuMTYyMTIgMi40ODE3MiwtNS43NjIyOSA1LjY0Mzc1LC01LjgxMTcyYzEuNTQ5NjgsLTAuMDI0MiAzLjA0MzE1LDAuNTc5OTYgNC4xNDAxMywxLjY3NDgyek0xMzcuNiw1MS42bC0zLjI3ODQ3LDI3Ljg1NjI0Yy0xLjQ2ODI2LC0wLjEyNTUyIC0yLjk1NDA3LC0wLjE4OTU4IC00LjQ1NDg3LC0wLjE4OTU4Yy0yOC41MDA0LDAgLTUxLjYsMjMuMDk5NiAtNTEuNiw1MS42YzAsNi40MDY1OCAxLjE2NzIzLDEyLjU0MDI2IDMuMzAwNjUsMTguMmgtMjUuNTEwNTRjLTUuODEzNiwwIC0xMC43MDA1NSwtNC4zNDk0NSAtMTEuMzc3MDgsLTEwLjEyMjkybC0xMC4yNzk2OSwtODcuMzQzNzV6Ij48L3BhdGg+PC9nPjxnIHN0cm9rZT0ibm9uZSI+PGcgaWQ9IkxheWVyXzEiIGZpbGw9IiNmMWM0MGYiPjxwYXRoIGQ9Ik0xMjkuODY2NjcsOTAuNzMzMzNjLTIyLjE2NTA3LDAgLTQwLjEzMzMzLDE3Ljk2ODI3IC00MC4xMzMzMyw0MC4xMzMzM2MwLDIyLjE2NTA3IDE3Ljk2ODI3LDQwLjEzMzMzIDQwLjEzMzMzLDQwLjEzMzMzYzIyLjE2NTA3LDAgNDAuMTMzMzMsLTE3Ljk2ODI3IDQwLjEzMzMzLC00MC4xMzMzM2MwLC0yMi4xNjUwNyAtMTcuOTY4MjcsLTQwLjEzMzMzIC00MC4xMzMzMywtNDAuMTMzMzN6TTE0Ny4wNjY2NywxMzYuNmgtMzQuNGMtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2gzNC40YzMuMTY0OCwwIDUuNzMzMzMsMi41NjI4IDUuNzMzMzMsNS43MzMzM2MwLDMuMTcwNTMgLTIuNTY4NTMsNS43MzMzMyAtNS43MzMzMyw1LjczMzMzeiI+PC9wYXRoPjwvZz48ZyBpZD0iTGF5ZXJfMSIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMCI+PHBhdGggZD0iTTEyOS44NjY2Nyw3OS4yNjY2N2MtMjguNTAwNCwwIC01MS42LDIzLjA5OTYgLTUxLjYsNTEuNmMwLDI4LjUwMDQgMjMuMDk5Niw1MS42IDUxLjYsNTEuNmMyOC41MDA0LDAgNTEuNiwtMjMuMDk5NiA1MS42LC01MS42YzAsLTI4LjUwMDQgLTIzLjA5OTYsLTUxLjYgLTUxLjYsLTUxLjZ6Ij48L3BhdGg+PC9nPjwvZz48cGF0aCBkPSJNODkuNzMzMzMsMTcxdi04MC4yNjY2N2g4MC4yNjY2N3Y4MC4yNjY2N3oiIGlkPSJvdmVybGF5LWRyYWciIGZpbGw9IiNmZjAwMDAiIHN0cm9rZT0ibm9uZSIgb3BhY2l0eT0iMCI+PC9wYXRoPjwvZz48L3N2Zz4=";

  const dispatch = useDispatch();

  return (
    <div>
      <img
        onClick={() => dispatch({ type: TOGGLE_DELETE_ON })}
        className="h-8 mt-2"
        src={imageLink}
      />
    </div>
  );
};

DeleteTodo.defaultProps = {};

export default memo(DeleteTodo);
