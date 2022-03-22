import { Button } from "@mui/material";
import React from "react";
import Loading from "../../components/Loading";
import PokemonCard from "../../components/PokemonCard";
import { usePokemonContext } from "../../contexts/PokemonContext";

function Home() {
  const { pokemons, loading, hasMore, fetchMorePokemons } = usePokemonContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-16">
      <div className="flex flex-wrap justify-center gap-5">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="text" className="!px-10" onClick={fetchMorePokemons}>
          Load More
        </Button>
      </div>
    </div>
  );
}

export default Home;
