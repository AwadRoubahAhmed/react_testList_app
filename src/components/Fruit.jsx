import React from "react";

export default function Fruit({ fruitInfo, onFruitDelete }) {
  //State
  

  //Comportement

  //Affichage(render)
  return (
    <div>
      <li className="flex items-center justify-around">
        {fruitInfo.name}{" "}
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
