import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-20 h-20"
      />
      <h3 className="text-lg font-bold capitalize">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
