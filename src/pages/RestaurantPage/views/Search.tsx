import * as React from "react";
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
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Avatar,
  Button,
  Checkbox,
  Collapse,
  DialogActions,
  ListItemAvatar,
  ListItemIcon,
  TextField,
  // TextField,
} from "@mui/material";
import DeleteAddButtons from "../components/DeleteAddButtons";
import type { cartT, dishesT } from "../../../types";
import { formatThousands } from "../../../utils";
import { useTranslation } from "react-i18next";
import { currencies, restorant } from "../../../mock";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Search(params: any) {
  const { t } = useTranslation(["dish"]);

  const [search, setSearch] = React.useState("");

  // const handleToggle = (value: dishesT) => () => {
  //   params.addProduct(value);
  //   // const currentIndex = checked.indexOf(value);
  //   // const newChecked = [...checked];

  //   // if (currentIndex === -1) {
  //   //   newChecked.push(value);
  //   // } else {
  //   //   newChecked.splice(currentIndex, 1);
  //   // }

  //   // setChecked(newChecked);
  // };

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
          <TextField
            fullWidth
            value={search}
            placeholder={t("search")}
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {t("search")}
          </Typography> */}
          {/* <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              params.onDeleteCart();
              params.onClose();
            }}
            aria-label="close"
          >
            <DeleteIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <List>
        {/* <TransitionGroup> */}
        {search.length > 0 &&
          restorant?.dishes
            .filter(
              (dish) =>
                dish.name.includes(search) || dish.description.includes(search)
            )
            .map((dish: any) => {
              return (
                <Collapse key={dish} in={true}>
                  <ListItemButton
                    role={undefined}
                    onClick={() =>
                      params.cart.find((d: dishesT) => d.id === dish.id)
                        ? params.onRremoveProduct(dish.id)
                        : params.onAddProduct(dish)
                    }
                    dense
                  >
                    {/* {dish.id} */}
                    {/* {params.cart.findIndex((d: dishesT) => d.id === dish.id)} */}
                    <ListItemIcon sx={{ minWidth: "34px" }}>
                      <Checkbox
                        edge="start"
                        checked={params.cart
                          .map((c: { id: number }) => c.id)
                          .includes(dish.id)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": `checkbox-list-label-${dish}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemAvatar sx={{ mr: 2 }}>
                      <Avatar
                        alt={dish.name}
                        src={dish.image}
                        variant="rounded"
                        sx={{ width: 56, height: 56 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={dish.name}
                      secondary={dish.description}
                    />
                    <Typography variant="body2">
                      {formatThousands(dish.price)}{" "}
                      {restorant.currency &&
                        currencies[restorant?.currency]}
                    </Typography>
                  </ListItemButton>
                  {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 1rem 0 4rem",
                  }}
                >
                  <DeleteAddButtons
                    count={dish.quantity}
                    onAddProduct={() => params.onAddProduct(dish)}
                    onRremoveProduct={() => params.onRremoveProduct(dish.id)}
                  />
                  <Typography variant="h6">
                    {formatThousands(dish.price * dish.quantity)}{" "}
                    {restorants[0].currency &&
                      currencies[restorants[0]?.currency]}
                  </Typography>
                </div> */}
                  <Divider variant="inset" component="li" />
                </Collapse>
              );
            })}
        {/* </TransitionGroup> */}
      </List>
      {/* <DialogActions
        sx={{
          marginTop: "auto",
          position: "sticky",
          bottom: 16,
          padding: "1rem",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          fullWidth
          size="large"
          onClick={() => console.log("ddd")}
        >
          {t("orderFood")}
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}
