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
  Collapse,
  DialogActions,
  ListItemAvatar,
  // TextField,
} from "@mui/material";
import DeleteAddButtons from "../components/DeleteAddButtons";
import type { cartT } from "../../../types";
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

export default function Cart(params: any) {
  const { t } = useTranslation(["dish"]);

  const calculateTotal = () => {
    return params.cart
      .reduce(
        (total: number, item: cartT) => total + item.price * item.quantity,
        0
      )
      .toFixed(2);
  };

  React.useEffect(() => {
    if (params.cart.length === 0) params.onClose();
  }, [params.cart]);

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
            {t("order")}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              params.onDeleteCart();
              params.onClose();
            }}
            aria-label="close"
          >
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        {/* <TransitionGroup> */}
        {params.cart.map((dish: any) => {
          return (
            <Collapse key={dish} in={true}>
              <ListItemButton onClick={params.onDish(dish)}>
                <ListItemAvatar sx={{ mr: 2 }}>
                  <Avatar
                    alt={dish.name}
                    src={dish.image}
                    variant="rounded"
                    sx={{ width: 56, height: 56, borderRadius: "12px" }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={dish.name + dish.id}
                  secondary={dish.description}
                />
              </ListItemButton>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 1rem 0 5.5rem",
                }}
              >
                <DeleteAddButtons
                  count={dish.quantity}
                  onAddProduct={() => params.onAddProduct(dish)}
                  onRremoveProduct={() => params.onRremoveProduct(dish.id)}
                />
                <Typography variant="body1">
                  {formatThousands(dish.price * dish.quantity)}{" "}
                  {restorant.currency && currencies[restorant?.currency]}
                </Typography>
              </div>
              <Divider variant="inset" component="li" />
            </Collapse>
          );
        })}
        {/* </TransitionGroup> */}
      </List>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AddIcon />}
        sx={{ margin: "1rem" }}
        onClick={params.onClose}
      >
        Добавить ещё что-нибудь
      </Button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ margin: "1rem" }}>
          {t("total")}
        </Typography>

        <Typography variant="h6" sx={{ margin: "1rem" }}>
          {formatThousands(calculateTotal())}{" "}
          {restorant.currency && currencies[restorant?.currency]}
        </Typography>
      </div>
      {/* <div style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          startIcon={<NotificationsNoneIcon />}
        >
          {t("waiter")}
        </Button>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          startIcon={<AddIcon fontSize="small" />}
        >
          {t("comments")}
        </Button>
      </div> */}

      <DialogActions
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
      </DialogActions>
    </Dialog>
  );
}
