import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { currencies, restorant } from "../../mock";
import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  Fab,
  IconButton,
  Paper,
  Slide,
  Toolbar,
} from "@mui/material";
import { Global } from "@emotion/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatThousands } from "../../utils";
import { useParams } from "react-router-dom";
import type { cartT, dishesT } from "../../types";
import "swiper/css";
import Cart from "./views/Cart";
import { Root } from "./styled";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import Swipeable from "../../components/Swipeable";
import DishInfo from "./views/DishInfo";
import DishList from "./views/DishList";
import { TransitionProps } from "@mui/material/transitions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Sidebar from "./components/Sidebar";
import Favorite from "./views/Favorite";
import Search from "./views/Search";
import RestorantInfo from "./views/RestorantInfo";

const fabStyle = {
  position: "fixed",
  boxShadow: "none",
  bottom: 16,
  right: 16,
};

const slides = [
  `url(https://garage.by/detskiy_mk)`,
  `url(https://garage.by/detskie_voskresesenia)`,
  `url(https://imgur.com/JC52vlZ.jpg)`,
  `url(https://garage.by/pasta2-1)`,
  `url(https://garage.by/breakfast15)`,
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function RestaurantPage() {
  const [dish, setDish] = React.useState<dishesT>();
  const [openCart, setOpenCart] = React.useState(false);
  const [openFavorite, setOpenFavorite] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [cart, setCart] = useState<cartT[]>([]);
  const [openInfo, setOpenInfo] = React.useState(false);

  const toggleDrawerInfo = (newOpen: boolean) => () => {
    setOpenInfo(Boolean(newOpen));
  };

  const random1 = Math.ceil(Math.random() * 39);
  const random2 = Math.ceil(Math.random() * 39);
  const random3 = Math.ceil(Math.random() * 39);

  const magicCart: cartT[] = [
    { ...restorant.dishes[random1], quantity: 1 },
    { ...restorant.dishes[random2], quantity: 1 },
    { ...restorant.dishes[random3], quantity: 1 },
  ];

  // Функция для добавления продукта
  const addProduct = (product: dishesT, count = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Увеличиваем количество, если продукт уже в корзине
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity && item.quantity + count }
            : item
        );
      }
      // Добавляем новый продукт
      return [...prevCart, { ...product, quantity: count }];
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

  const [favorites, setFavorites] = React.useState<number[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const saveFavorites = (favorit: number) => {
    if (favorites) {
      if (favorites.includes(favorit)) {
        const filteredFavorites = favorites.filter(
          (f: number) => f !== favorit
        );
        setFavorites(filteredFavorites);
        localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      } else {
        setFavorites([...favorites, favorit]);
        localStorage.setItem(
          "favorites",
          JSON.stringify([...favorites, favorit])
        );
      }
    } else {
      setFavorites([favorit]);
      localStorage.setItem("favorites", JSON.stringify([favorit]));
    }
  };

  const handleClickOpen = () => {
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
  };

  const { id = "0" } = useParams<{ id: string }>();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    if (typeof newOpen !== "boolean") setDish(newOpen);
    setOpen(Boolean(newOpen));
  };

  const [expanded, setExpanded] = React.useState<number | null>(null);

  const handleExpandClick = (index: number | null) => {
    if (expanded !== null && expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <Root>
      <Sidebar
        setOpenFavorite={setOpenFavorite}
        setOpenSearch={setOpenSearch}
        toggleDrawerInfo={toggleDrawerInfo(true)}
      />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `max-content`,
            overflow: "visible",
            borderRadius: "1rem 1rem 0 0",
          },
        }}
      />

      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <Paper
              sx={{
                height: "7rem",
                backgroundImage: slide,
                backgroundSize: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Список group */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: "1rem 1rem 3rem",
          gap: "1rem",
        }}
      >
        {restorant?.dishesGroup.map((group, index) => (
          <Card
            key={index}
            variant="outlined"
            elevation={0}
            sx={{
              position: "relative",
            }}
          >
            <CardActionArea onClick={() => handleExpandClick(index)}>
              <CardMedia
                component="img"
                height="140"
                image={group.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body1" component="div">
                  {group.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
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

      {/* Избранное */}
      <Favorite
        cart={cart}
        favorites={favorites}
        open={openFavorite}
        onClose={() => setOpenFavorite(false)}
        onAddProduct={addProduct}
        onRremoveProduct={removeProduct}
        // onDeleteCart={deleteCart}
        onDish={toggleDrawer(true)}
      />
      {/* Поиск */}
      <Search
        cart={cart}
        // favorites={favorites}
        open={openSearch}
        onClose={() => setOpenSearch(false)}
        onAddProduct={addProduct}
        onRremoveProduct={removeProduct}
        // onDeleteCart={deleteCart}
        onDish={toggleDrawer(true)}
      />

      {/* Карзина */}
      <Slide
        direction="up"
        in={!openCart && cart.length > 0}
        mountOnEnter
        unmountOnExit
      >
        <Button
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          size="large"
          disableElevation
          style={{ position: "sticky", bottom: "1rem", zIndex: 1301 }}
          onClick={handleClickOpen}
        >
          {formatThousands(Number(calculateTotal()))}{" "}
          {restorant?.currency && currencies[restorant?.currency]}
        </Button>
      </Slide>
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
        onDish={(dish: dishesT) => toggleDrawer(dish)}
      />
      {/* Информация о блюде */}
      {dish && (
        <Swipeable
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <DishInfo
            dish={dish}
            cart={cart}
            favorites={favorites}
            saveFavorites={saveFavorites}
            removeProduct={removeProduct}
            addProduct={addProduct}
            onClose={toggleDrawer(false)}
          />
        </Swipeable>
      )}
      {/* Блюда */}
      {expanded !== null && (
        <Dialog
          fullScreen
          open={expanded !== null}
          onClose={() => handleExpandClick(null)}
          TransitionComponent={Transition}
        >
          <AppBar
            color="inherit"
            elevation={0}
            sx={{ position: "sticky", top: 0 }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => handleExpandClick(null)}
                aria-label="close"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {restorant?.dishesGroup[expanded].name}
              </Typography>
            </Toolbar>
          </AppBar>
          <DishList
            cart={cart}
            group={restorant?.dishesGroup[expanded]}
            onAddProduct={addProduct}
            onRremoveProduct={removeProduct}
            onDeleteCart={deleteCart}
            onDish={toggleDrawer(true)}
            toggleDrawer={toggleDrawer}
            saveFavorites={saveFavorites}
          />
        </Dialog>
      )}
    </Root>
  );
}

export default RestaurantPage;
