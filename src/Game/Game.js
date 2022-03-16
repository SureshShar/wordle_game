import React from "react";
import Classes from "./Game.module.css";
import Tile from "../Tile/Tile";

export default function Game() {
   const Char = ['A','B','C','D','E','F'];
   let tile = Char.map(chr => <Tile char={chr}/>)

  return (
    <div className={Classes.container}>
      <div className={Classes.game_bord}>
        {tile}
        {tile}
        {tile}
        {tile}
        {tile}
        {tile}
      </div>
      <div className={Classes.game_keybord}>
      
      </div>
    </div>
  );
}
