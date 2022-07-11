import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stats from "../../components/Stats";
import Types from "../../components/Types";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { formatArray } from "../../shared/utilities";
import Loading from "../../components/Loading";

function Details() {
  const params = useParams();
  const { getPokemonDetails } = usePokemonContext();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (params.id) {
      getPokemonDetails(params.id).then((data) => setDetails(data));
    }
  }, []);

  const isPalindrome = () => {
    if (!details) return "null";
    const reverseName = details.name.split("").reverse().join("");
    // console.log("reverse: ", reverseName);
    return reverseName === details.name;
  };

  console.log(isPalindrome());

  const getStats = () => {
    if (details) {
      return details.stats.map((stat) => ({
        base_stat: stat.base_stat,
        effort: stat.effort,
        name: stat.stat.name,
      }));
    }
  };

  if (!details) {
    return <Loading />;
  }

  return (
    <div className="py-20 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center capitalize">
        {details.name}
      </h1>
      <div className="flex items-center justify-center">
        <img className="h-40" src={details.sprites.front_default} alt="" />
        <img className="h-40" src={details.sprites.front_shiny} alt="" />
      </div>

      <section className="my-4">
        <h3 className="mb-2 font-semibold">Types:</h3>
        <Types data={formatArray(details.types, "type")} hasImage={true} />
      </section>

      <section>
        <h3 className="mb-2 font-semibold">Abilities:</h3>
        <Types
          data={formatArray(details.abilities, "ability")}
          hasImage={false}
        />
      </section>

      <section className="mt-4">
        <h3 className="mb-2 font-semibold">Stats:</h3>
        <Stats data={getStats()} />
      </section>
    </div>
  );
}

export default Details;
