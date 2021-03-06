export const getElementIcon = () => {
  return {
    grass: "๐ฟ",
    poison: "๐งช",
    normal: "*๏ธโฃ",
    bug: "๐ชฒ",
    flying: "๐ธ",
    water: "๐",
    fire: "๐ฅ",
    rock: "๐ชจ",
    steel: "๐ช",
    electric: "โก",
    fighting: "๐ฅ",
    ground: "๐ค",
    psychic: "๐ฃ",
    fairy: "๐ง",
    ghost: "๐ป",
    ice: "๐ง",
    dragon: "๐",
    dark: "โซ",
  };
};

export const formatArray = (data, category) => {
  if (data === null || data === undefined) return [];
  return data.map((item) => {
    return { name: item[category].name };
  });
};
