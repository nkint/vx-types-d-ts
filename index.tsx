import * as React from "react";
import { render } from "react-dom";
import { Polygon } from "@vx/shape";

const width = 600;
const height = 600;

const polygon = {
  sides: 3,
  fill: "rgb(174, 238, 248)",
  rotate: 90,
  size: 42
};

const Hello = function() {
  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill="#7f82e3" rx={14} />
      <g
        transform={`translate(${width / 2 - polygon.size / 2}, ${height / 2 -
          polygon.size / 2})`}
      >
        <Polygon
          sides={polygon.sides}
          size={polygon.size}
          fill={polygon.fill}
          rotate={polygon.rotate}
        />
      </g>
    </svg>
  );
};

const view = Hello();

const element = document.getElementById("root");
render(view, element);
