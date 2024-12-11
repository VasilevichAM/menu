import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { currencies, dishes, dishesGroup, restorants } from "../../mock";
import {
  Box,
  Button,
  Checkbox,
  Fab,
  IconButton,
  Rating,
  Slide,
  Tab,
  Tabs,
} from "@mui/material";
import { Global } from "@emotion/react";
// import CssBaseline from "@mui/material/CssBaseline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatThousands } from "../../utils";
import { useParams } from "react-router-dom";
import type { cartT, dishesT } from "../../types";
import "swiper/css";
import Cart from "./views/Cart";
import DeleteAddButtons from "./components/DeleteAddButtons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import FilterIcon from "@mui/icons-material/Tune";
import { useTranslation } from "react-i18next";
import DishCard from "./components/DishCard";
import { Root } from "./styled";
// import Swipeable from "./components/Swipeable";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import Swipeable from "../../components/Swipeable";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RestorantInfo from "./views/RestorantInfo";

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

const magicCart = [
  {
    id: 1,
    restorantId: 1,
    name: "Dish",
    price: 100000,
    weight: 300,
    description: "Description 1",
    image:
      "https://aif-s3.aif.ru/images/015/573/91c0d7c133aa580e0c368bb536b053a1.jpg",
    range: 5,
    compound:
      "compound, compound, compound, compound, compound, compound, compound, compound",
    groupId: 1,
    quantity: 1,
  },
  {
    id: 4,
    restorantId: 1,
    name: "Dish 4",
    price: 10,
    weight: 300,
    description: "Description 4",
    image:
      "https://regionorel.ru/upload/iblock/cf3/cf39bf0b1c38f0b6003dca5ad506fde4.jpeg",
    range: 2,
    compound: "compound",
    groupId: 2,
    quantity: 1,
  },
];

function RestaurantPage() {
  const { t } = useTranslation(["dish"]);
  // const [count, setCount] = React.useState<number>(1);
  // const [value, setValue] = useState(0);
  const [dish, setDish] = React.useState<dishesT>();
  const [openCart, setOpenCart] = React.useState(false);
  const [cart, setCart] = useState<cartT[]>([]);

  // Функция для добавления продукта
  const addProduct = (product: dishesT) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Увеличиваем количество, если продукт уже в корзине
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity && item.quantity + 1 }
            : item
        );
      }
      // Добавляем новый продукт
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Функция для уменьшения количества продукта
  const removeProduct = (productId: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct?.quantity === 1) {
        // Удаляем продукт, если его количество 1
        return prevCart.filter((item) => item.id !== productId);
      }
      // Уменьшаем количество продукта
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: ((item.quantity && item.quantity) || 0) - 1 }
          : item
      );
    });
  };

  // Функция для удаления заказа
  const deleteCart = () => {
    setCart([]);
  };

  // Функция для вычисления общей суммы
  const calculateTotal = () => {
    return cart
      .reduce(
        (total: number, item: cartT) => total + item.price * item.quantity,
        0
      )
      .toFixed(2);
  };

  const [favorites, setFavorites] = React.useState<number[]>([]);
  console.log(favorites, "favorites");

  const saveFavorites = (favorit: number) => {
    // const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites) {
      if (Array.isArray(favorites) && favorites.includes(favorit)) {
        const filteredFavorites = favorites.filter(
          (favorite: number) => favorite !== favorit
        );
        console.log(JSON.stringify(filteredFavorites));
        setFavorites(filteredFavorites);
      } else {
        console.log(JSON.stringify([...favorites, favorit]));
        setFavorites([...favorites, favorit]);
      }
    } else {
      console.log(JSON.stringify([favorit]));
      setFavorites([favorit]);
      // localStorage.setItem("favorites", JSON.stringify([favorit]))
    }

    console.log(favorites, favorit, JSON.stringify([...favorites, favorit]));

    // localStorage.setItem("favorites", JSON.stringify(columnVisibility));
    // setOpenCart(true);
  };

  const handleClickOpen = () => {
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
  };

  const { id = "0" } = useParams<{ id: string }>();
  const restorant = restorants.find(
    (restorant: { id: number }) => restorant.id === Number(id)
  );

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    if (typeof newOpen !== "boolean") setDish(newOpen);
    setOpen(Boolean(newOpen));
  };

  const [openInfo, setOpenInfo] = React.useState(false);

  const toggleDrawerInfo = (newOpen: any) => () => {
    setOpenInfo(Boolean(newOpen));
  };

  const groupRefs = useRef({});

  const groupedDishes = dishes.reduce(
    (acc: Record<string, dishesT[]>, dish) => {
      // Проверяем, существует ли группа в аккумуляторе
      if (!acc[dish.groupId]) {
        acc[dish.groupId] = []; // Если нет, создаем новый массив для группы
      }
      acc[dish.groupId].push(dish); // Добавляем блюдо в соответствующую группу
      return acc;
    },
    {}
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Root>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(95%)`,
            overflow: "visible",
            borderRadius: "1rem 1rem 0 0",
          },
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 1rem",
        }}
      >
        <div>
          <Typography variant="h6">{restorant?.rating}</Typography>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={restorant?.rating}
              precision={0.1}
              readOnly
              size="small"
            />
            {/* <Typography component="legend">{t("rating")}</Typography> */}
          </div>
          {/* <div>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <Typography component="legend">{t("averageBill")}</Typography>
          </div> */}
        </div>
        <IconButton aria-label="info" onClick={toggleDrawerInfo(true)}>
          <MoreVertIcon />
        </IconButton>
      </div>

      {/* Категории блюд */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          position: "sticky",
          top: 56,
          zIndex: 1,
          backgroundColor: "inherit",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {dishesGroup.map((group) => (
            <Tab key={group.id} label={group.name} />
          ))}
        </Tabs>
      </Box>

      {/* Список блюд */}
      <div
        style={{
          padding: "1rem 1rem 2rem",
          gap: "1rem",
        }}
      >
        {Object.keys(groupedDishes).map((groupId, index) => (
          <div
            id={String(index)}
            key={groupId}
            ref={(el) => ((groupRefs.current as any)[index] = el)}
          >
            <Typography
              sx={{ textAlign: "left", my: 2, flex: 1 }}
              variant="h6"
              // style={{ textAlign: "left" }}
            >
              {dishesGroup.find((g) => String(g.id) === groupId)?.name}:
            </Typography>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              {groupedDishes[groupId].map((dish: dishesT, index) => (
                <DishCard
                  key={index}
                  dish={dish}
                  cart={cart}
                  favorites={favorites}
                  toggleDrawer={toggleDrawer}
                  addProduct={addProduct}
                  removeProduct={removeProduct}
                  saveFavorites={saveFavorites}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Рекомендации */}
      <Fab
        sx={fabStyle}
        color="primary"
        onClick={() => {
          setCart(magicCart);
          handleClickOpen();
        }}
      >
        <AutoFixHighOutlinedIcon />
      </Fab>

      {/* Карзина */}
      <Slide direction="up" in={cart.length > 0} mountOnEnter unmountOnExit>
        <Button
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          size="large"
          disableElevation
          style={{ position: "sticky", bottom: "1rem" }}
          onClick={handleClickOpen}
        >
          {formatThousands(Number(calculateTotal()))}{" "}
          {restorant?.currency && currencies[restorant?.currency]}
        </Button>
      </Slide>

      {/* Информация о блюде */}
      {dish && (
        <Swipeable
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div>
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
                  checked={
                    Array.isArray(favorites) && favorites.includes(dish.id)
                  }
                  // sx={{ padding: "0.25rem" }}
                  icon={<FavoriteBorderIcon sx={{ color: "#fff" }} />}
                  checkedIcon={<FavoriteIcon sx={{ color: "#fff" }} />}
                  onChange={(e) => {
                    e.stopPropagation();
                    // e.preventDefault();
                    saveFavorites(dish.id);
                  }}
                />
              </div>
            </div>
            <Box component="section" sx={{ p: 2 }}>
              <Typography sx={{ py: 1 }} variant="h5">
                {dish.name}{" "}
                <small style={{ color: "#999" }}>{dish.weight}г</small>
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
                count={cart.find((d) => d.id === dish.id)?.quantity || 1}
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
                    (cart.find((d) => d.id === dish.id)?.quantity || 1)
                )}{" "}
                {restorant?.currency && currencies[restorant?.currency]}
              </Button>
            </div>
          </div>
        </Swipeable>
      )}

      {/* О ресторане */}
      {restorant && (
        <Swipeable
          open={openInfo}
          onClose={toggleDrawerInfo(false)}
          onOpen={toggleDrawerInfo(true)}
        >
          <RestorantInfo {...restorant} />
        </Swipeable>
      )}

      {/* Корзина */}
      <Cart
        cart={cart}
        open={openCart}
        onClose={handleClose}
        onAddProduct={addProduct}
        onRremoveProduct={removeProduct}
        onDeleteCart={deleteCart}
        onDish={toggleDrawer(true)}
      />
    </Root>
  );
}

export default RestaurantPage;
