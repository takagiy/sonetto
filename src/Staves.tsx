import React from "react";
import _ from "lodash";
import { Clef } from "./Clef";
import { TimeSig } from "./TimeSig";
import * as clef from "./Clef";
import { Note, NoteSpec } from "./Note";
import { BarLine } from "./BarLine";

type Props = {
  x?: string | number;
  y?: string | number;
  clef: clef.Kind;
};

export const Staves = (props: Props) => {
  let x = 20;
  const nextX = (component: { width: number }) => {
    let prevX = x;
    x += component.width;
    return prevX;
  };

  const notes: NoteSpec[] = [
    { line: 0, duration: "1/4" },
    { line: 0.5, duration: "1/4" },
    { line: 1, duration: "1" },
  ];

  return (
    <svg className="staves" overflow="visible" x={props.x} y={props.y}>
      <g fontSize="100">
        {_.range(5).map((i) => (
          <line
            key={i}
            stroke="black"
            strokeWidth="3.25"
            x1="0"
            x2="2000"
            y1={i * 25}
            y2={i * 25}
          />
        ))}
        <Clef x={nextX(Clef)} kind={props.clef} />
        <TimeSig x={nextX(TimeSig)} top={3} bottom={4} />
        {notes.map((note) => (
          <Note x={nextX(Note.width[note.duration])} note={note} />
        ))}
        <g textAnchor="end">
          <BarLine x="2000" height="100" />
        </g>
      </g>
    </svg>
  );
};
