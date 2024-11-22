import React, { useState } from "react";

function FruitForm({ handleAdd }) {
  //-----------------------------------------------------//
  //State
  const [nouveauFruit, setNouveauFruit] = useState("");

  //-----------------------------------------------------//
  //Comportement
  /*3-Soumission du formulaire*/
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("handleSubmit!", e);

    //1. Copie du state

    //2. Manipuler la copie du state
    const id = new Date().getTime();
    const name = nouveauFruit;
    const fruitAjouter = { id, name };
    handleAdd(fruitAAjouter);

    //3. Modifier mon state avec le setter dedié

    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  //-----------------------------------------------------//
  //Affichage(render)
  return (
    <div>
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

export default FruitForm;
