import React from 'react';
import Classes from "./Tile.module.css";

export default function Tile(props) {
  return (
    <div className={Classes.tile}>
      {props.char}
    </div>
  )
}
