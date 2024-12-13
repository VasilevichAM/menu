import { Box, Button, Checkbox, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteAddButtons from "../components/DeleteAddButtons";
import { useTranslation } from "react-i18next";
import { formatThousands } from "../../../utils";

export default function DishInfo(params: any) {
  const { dish, cart, favorites, addProduct, removeProduct } = params;
  const { t } = useTranslation(["dish"]);
  return (
    <div>
      {/* <img src={dish?.image} /> */}
      <div
        style={{
          width: "100%",
          borderRadius: "1rem 1rem 0 0",
          height: "20rem",
          backgroundImage: `url(${dish?.image})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "50%",
            margin: "0.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <Checkbox
            aria-label="FavoritDish"
            size="small"
            checked={Array.isArray(favorites) && favorites.includes(dish.id)}
            // sx={{ padding: "0.25rem" }}
            icon={<FavoriteBorderIcon sx={{ color: "#fff" }} />}
            checkedIcon={<FavoriteIcon sx={{ color: "#fff" }} />}
            onChange={(e) => {
              e.stopPropagation();
              // e.preventDefault();
              params.saveFavorites(dish.id);
            }}
          />
        </div>
      </div>
      <Box component="section" sx={{ p: 2 }}>
        <Typography sx={{ py: 1 }} variant="h5">
          {dish.name}
        </Typography>
        <Typography sx={{ py: 1, color: "text.secondary" }}>
          {t("description")}: {dish?.description}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {t("compound")}: {dish?.compound}
        </Typography>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <DeleteAddButtons
          count={
            cart.find((d: { id: number }) => d.id === dish.id)?.quantity || 1
          }
          onAddProduct={() => addProduct(dish)}
          onRremoveProduct={() => removeProduct(dish?.id)}
        />

        <Button
          variant="contained"
          disableElevation
          size="large"
          sx={{ flexGrow: 1 / 1.5, borderRadius: "1rem" }}
        >
          {formatThousands(
            dish.price *
              (cart.find((d: { id: number }) => d.id === dish.id)?.quantity ||
                1)
          )}{" "}
        </Button>
      </div>
    </div>
  );
}
