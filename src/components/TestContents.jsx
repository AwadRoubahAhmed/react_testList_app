import React, { useState } from "react";
import Fruit from "./fruit";

export default function TestContents() {
  //Code JavaScript;

  // State (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Abricot" },
  ]);

  // Nouveau fruit à ajouter
  const [nouveauFruit, setNouveauFruit] = useState("");

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

  /*3-Soumission du formulaire*/
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("handleSubmit!", e);

    // Copie du state
    const fruitsCopy = [...fruits];

    //Manipuler la copie du state
    const id = new Date().getTime();
    const name = nouveauFruit;
    const fruitAjouter = { id, name };
    fruitsCopy.push(fruitAjouter);

    // Modifier mon state avec le setter dedié
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  //Code JSX;
  // Affichage (render)
  return (
    <div>
      <h3 className="text-xl text-center font-bold underline my-4 mx-6">
        Listes des Fruits!
      </h3>
      <div className="bg-slate-500 text-center">
        <ul className="list-none pl-4 mx-4 text-lg">
          {fruits.map((fruit) => (
            <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} />
          ))}
        </ul>
      </div>

      {/*1-Gestion du formulaire*/}
      {/*2-Création du formulaire*/}
      <form action="submit" onSubmit={handleSubmit}>
        <h3 className="text-xl text-center font-bold underline my-6 mx-6">
          Champs d'ajouts des fruits !
        </h3>
        <input
          className="border rounded-md px-4 py-2 my-3 flex-1 capitalize"
          type="text"
          placeholder="Ajouter des fruits..."
          onChange={handleChange}
        />
        <button
          className="border rounded-md px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white cursor-pointer font-semibold"
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
