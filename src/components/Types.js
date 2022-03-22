import { Avatar, Chip } from "@mui/material";
import React from "react";
import { getElementIcon } from "../shared/utilities";

function Types({ data, hasImage }) {
  return (
    <div className="flex gap-2">
      {data.map((item) => (
        <Chip
          key={item.name}
          avatar={
            hasImage ? <Avatar>{getElementIcon()[item.name]}</Avatar> : null
          }
          label={item.name}
        />
      ))}
    </div>
  );
}

export default Types;
