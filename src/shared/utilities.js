export const getElementIcon = () => {
  return {
    grass: "🌿",
    poison: "🧪",
    normal: "*️⃣",
    bug: "🪲",
    flying: "💸",
    water: "🌊",
    fire: "🔥",
    rock: "🪨",
    steel: "🪙",
    electric: "⚡",
    fighting: "🥊",
    ground: "🟤",
    psychic: "🟣",
    fairy: "🧚",
    ghost: "👻",
    ice: "🧊",
    dragon: "🐉",
    dark: "⚫",
  };
};

export const formatArray = (data, category) => {
  if (data === null || data === undefined) return [];
  return data.map((item) => {
    return { name: item[category].name };
  });
};
