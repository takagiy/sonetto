import React from "react";

type Props = {
  x?: number | string;
  height: number | string;
};

export const BarLine = (props: Props) => {
  let x = props.x || 0;
  return (
    <g transform={`translate(${x}, ${props.height})`}>
      <text
        fontSize={props.height}
        transform={`scale(${100 / +props.height}, 1)`}
      >
        &#xE030;
      </text>
    </g>
  );
};
