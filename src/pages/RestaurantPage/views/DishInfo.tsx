import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteAddButtons from "../components/DeleteAddButtons";
import { useTranslation } from "react-i18next";
import { formatThousands } from "../../../utils";
import { currencies, restorants } from "../../../mock";
import { Chat, Close, Share, Star } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function DishInfo(params: any) {
  const { dish, cart, favorites, addProduct, removeProduct } = params;
  const { t } = useTranslation(["dish"]);

  const quantity =
    cart.find((d: { id: number }) => d.id === dish.id)?.quantity || 1;

  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount(quantity);
  }, [cart]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Заголовок вашей ссылки",
          text: "Текст для общего доступа",
          url: "https://manu.com", // Замените на вашу ссылку
        });
        console.log("Успешно поделились!");
      } catch (error) {
        console.error("Ошибка при попытке поделиться:", error);
      }
    } else {
      // Альтернативное поведение для браузеров, которые не поддерживают API
      alert("К сожалению, ваш браузер не поддерживает функцию обмена.");
    }
  };
  return (
    <div>
      {/* <img src={dish?.image} /> */}
      <div
        style={{
          width: "100%",
          borderRadius: "1rem 1rem 0 0",
          height: "20rem",
          backgroundImage: `url(${dish?.image})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "5rem",
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
              // e.stopPropagation();
              // e.preventDefault();
              params.saveFavorites(dish.id);
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "2.5rem",
            borderRadius: "50%",
            margin: "0.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <IconButton aria-label="Close" size="small" onClick={handleShare}>
            <Share sx={{ color: "#fff" }} />
          </IconButton>
        </div>
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
          <IconButton
            aria-label="Close"
            size="small"
            onClick={() => {
              // e.stopPropagation();
              // e.preventDefault();
              params.onClose();
            }}
          >
            <Close sx={{ color: "#fff" }} />
          </IconButton>
        </div>
      </div>
      <Box component="section" sx={{ p: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ py: 1 }} variant="h5">
            {dish.name} {dish?.description}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Star
              sx={{ fontSize: "20px", marginRight: "4px" }}
              color="primary"
            />
            <span>4.5</span>
          </div>
        </div>
        <Typography sx={{ py: 1, color: "text.secondary" }}>
          {t("description")}: {dish?.description2}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {t("compound")}: {dish?.compound}
        </Typography>
        {/* <Divider sx={{ margin: "1rem 0" }} /> */}
        {/* <div style={{ display: "flex", gap: "0.5rem" }}> */}
        {/* <Chip
            icon={<Star fontSize="small" color="primary" />}
            sx={{ background: "white" }}
            label="4.5"
          /> */}
        {/* <Chip
            icon={<Chat fontSize="small" />}
            sx={{ background: "white" }}
            label="45"
          /> */}
        {/* <div>
            <Star />
            <span>4.5</span>
          </div>
          <div>
            <Chat />
            <span>4</span>
          </div> */}
        {/* </div> */}
      </Box>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <div style={{ margin: "auto", flexGrow: 1 }}>
          <DeleteAddButtons
            count={count}
            onAddProduct={() => setCount((prevCount) => prevCount + 1)}
            onRremoveProduct={() => setCount((prevCount) => prevCount - 1)}
          />
        </div>

        <Button
          variant="contained"
          disableElevation
          size="large"
          sx={{ flexGrow: 2 }}
          onClick={() => {
            addProduct(dish, count);
            params.onClose();
          }}
        >
          {formatThousands(dish.price * count)}{" "}
          {restorants[0].currency && currencies[restorants[0]?.currency]}
        </Button>
      </div>
    </div>
  );
}
