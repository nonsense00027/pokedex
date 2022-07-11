import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

const PokemonContext = createContext();

const url = "https://pokeapi.co/api/v2/pokemon";

export const PokemonContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const res = await axios.get(url);
      setPokemons(res.data.results);
      setNextUrl(res.data.next);
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  const fetchMorePokemons = () => {
    axios.get(nextUrl).then((response) => {
      setPokemons((prevValue) => [...prevValue, ...response.data.results]);
      setNextUrl(response.data.next);
      if (response.data.next === null) {
        setHasMore(false);
      }
    });
  };

  const getPokemonDetails = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => reject(err));
    });
  };

  const payload = useMemo(
    () => ({
      pokemons,
      loading,
      hasMore,
      fetchMorePokemons,
      getPokemonDetails,
    }),
    [pokemons, loading, nextUrl]
  );
  return (
    <PokemonContext.Provider value={payload}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
