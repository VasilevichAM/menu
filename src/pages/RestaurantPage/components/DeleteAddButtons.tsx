import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function DeleteAddButtons(params: any) {
  return (
    <div style={{ borderRadius: "0.5rem" }}>
      <IconButton
        aria-label="Remove"
        // size="large"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          params.onRremoveProduct();
        }}
      >
        <RemoveIcon />
      </IconButton>
      <span>{params.count}</span>
      <IconButton
        aria-label="Add"
        // size="large"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          params.onAddProduct();
        }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
}
