import React from "react";

export default function Fruit() {
  //State
  const fruitInfo = props.fruitInfo;
  const onFruitDelete = props.onFruitDelete;

  //Comportement

  //Affichage(render)
  return (
    <div>
      <li className="flex items-center justify-around" key={fruitInfo.id}>
        {props.fruitInfo.name}{" "}
        <button
          onClick={() => onFruitDelete(fruitInfo.id)}
          className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs rounded-full p-1"
        >
          X
        </button>
      </li>
    </div>
  );
}
