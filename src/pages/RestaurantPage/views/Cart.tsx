import * as React from "react";
// import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Avatar, ListItemAvatar } from "@mui/material";
import DeleteAddButtons from "../components/DeleteAddButtons";
import type { dishesT } from "../../../types";
import { formatThousands } from "../../../utils";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart(params: any) {
  const [count, setCount] = React.useState<number>(1);
  const sumPrice = params.dishSelected.reduce((acc: number, dish: dishesT) => {
    return acc + dish.price;
  }, 0);
  return (
    <Dialog
      fullScreen
      open={params.open}
      onClose={params.onClose}
      TransitionComponent={Transition}
    >
      <AppBar color="inherit" elevation={0} sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={params.onClose}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Заказ
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={params.onClose}
            aria-label="close"
          >
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        {params.dishSelected.map((dish: any) => {
          return (
            <>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt={dish.name} src={dish.image} />
                </ListItemAvatar>
                <ListItemText primary={dish.name} secondary={dish.price} />
                <DeleteAddButtons count={count} setCount={setCount} />
              </ListItemButton>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
      <Typography variant="h4" sx={{ margin: "1rem" }}>
        {formatThousands(sumPrice)}
      </Typography>

      {/* <Typography variant="h6" sx={{ margin: "1rem" }}>
        +?
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >...</div> */}
    </Dialog>
  );
}
