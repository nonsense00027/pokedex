import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { usePokemonContext } from "../contexts/PokemonContext";
import { useNavigate } from "react-router-dom";
import Types from "./Types";
import { formatArray } from "../shared/utilities";

export default function PokemonCard({ name, url }) {
  const navigate = useNavigate();
  const { getPokemonDetails } = usePokemonContext();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getPokemonDetails(getId()).then((data) => setDetails(data));
  }, []);

  const getId = () => {
    return url.split("/").at(-2);
  };

  const selectPokemon = () => {
    navigate(`/details/${getId()}`);
  };

  return (
    <Card
      sx={{ display: "flex", width: 320, cursor: "pointer" }}
      onClick={selectPokemon}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" className="capitalize">
            {name}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Types data={formatArray(details?.types, "type")} hasImage={true} />
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={details?.sprites?.front_default}
        alt="Live from space album cover"
      />
    </Card>
  );
}
