import * as React from "react";
import { dishes } from "../../mock";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

function DishPage() {
  const { id = "0" } = useParams<{ id: string }>();
  const dish = dishes.find((d: { id: number }) => d.id === Number(id));
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "20rem",
          backgroundImage: `url(${dish?.image})`,
        }}
      >
        <h1 style={{ color: "white" }}>{dish?.name}</h1>
      </div>
      <div>
        <Button>Добавить</Button>
      </div>
    </div>
  );
}

export default DishPage;
