import React, { useState } from "react";
import Fruit from "./fruit";
import FruitForm from "./FruitForm";

export default function TestContents() {
  //Code JavaScript;

  // State (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Abricot" },
  ]);

  // Comportements
  const handleDelete = (id) => {
    console.log("Deleted", id);

    // Copie du state
    const fruitsCopy = [...fruits];

    // Manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    // Modifier mon state avec le setFruits
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1. Copie du State
    const fruitsCopy = [...fruits];

    //2. Manipuler mon State
    fruitsCopy.push(fruitAjouter);

    //3. Mofifier mon State avec le setter dédié
    setFruits(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitLike) => {
    alert(`I like this one : ${fruitLike}.`);
  };

  // Affichage (render)
  //Code JSX;
  return (
    <div>
      <h3 className="text-xl text-center font-bold underline my-4 mx-6">
        Listes des Fruits!
      </h3>
      <div className="bg-slate-500 text-center">
        <ul className="list-none pl-4 mx-4 text-lg">
          {fruits.map((fruit) => (
            <Fruit
              fruitInfo={fruit}
              onClick={() => afficherFruitPrefere(fruit.name)}
              key={fruit.id}
            />
          ))}
        </ul>
      </div>

      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}
