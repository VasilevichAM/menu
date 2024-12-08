import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function DeleteAddButtons(params: any) {
  return (
    <div style={{ backgroundColor: "#eee", borderRadius: "0.5rem" }}>
      <IconButton
        aria-label="Remove"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          params.setCount(params.count - 1);
        }}
      >
        <RemoveIcon />
      </IconButton>
      <span>{params.count}</span>
      <IconButton
        aria-label="Add"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          params.setCount(params.count + 1);
        }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
}
