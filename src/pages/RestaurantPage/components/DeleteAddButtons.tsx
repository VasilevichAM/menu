import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function DeleteAddButtons(params: any) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // width: "110px",
        justifyContent: "space-between",
      }}
    >
      <IconButton
        aria-label="Remove"
        disabled={params.count === 1}
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          // e.preventDefault();
          params.onRremoveProduct();
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1">{params.count}</Typography>
      <IconButton
        aria-label="Add"
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          // e.preventDefault();
          params.onAddProduct();
        }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
}
