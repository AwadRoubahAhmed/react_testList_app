import React, { useState } from "react";

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
  const handleDelete = (id, name) => {
    console.log("Deleted", id, name);

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
    console.log("handleSubmit!", e);
  };

  //Code JSX;;
  // Affichage (render)
  return (
    <div>
      <h3 className="text-xl text-center font-bold underline my-4 mx-6">
        Listes des Fruits!
      </h3>
      <div className="bg-slate-500 text-center">
        <ul className="list-none pl-4 mx-4 text-lg">
          {fruits.map((fruit) => (
            <li className="flex items-center justify-around" key={fruit.id}>
              {fruit.id}. {fruit.name}
              <button
                onClick={() => handleDelete(fruit.id, fruit.name)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs rounded-full p-1"
              >
                X
              </button>
            </li>
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
