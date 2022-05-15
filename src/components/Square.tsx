import React from "react";

type Props = {
  onClick: () => void;
  value: string;
};
const Square = (props: Props) => {
  return (
    <div onClick={props.onClick} className="board-square">
      <span className="board-square__value">{props.value}</span>
    </div>
  );
};
export { Square };
