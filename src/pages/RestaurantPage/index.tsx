import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { currencies, dishes, dishesGroup, restorants } from "../../mock";
import { Box, Button, Checkbox } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatThousands } from "../../utils";
import { useParams } from "react-router-dom";
import type { cartT, dishesT } from "../../types";
import "swiper/css";
import Cart from "./views/Cart";
import DeleteAddButtons from "./components/DeleteAddButtons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTranslation } from "react-i18next";
import DishCard from "./components/DishCard";

const drawerBleeding = 0;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "1rem 1rem 0 0",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 10,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

function RestaurantPage(props: Props) {
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

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    if (typeof newOpen !== "boolean") setDish(newOpen);
    setOpen(Boolean(newOpen));
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

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

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(95%)`,
            overflow: "visible",
            borderRadius: "1rem 1rem 0 0",
          },
        }}
      />
      {/* <div> // TODO: для слайдера с предложениями для клиентов, надо продумать
        <Swiper
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div> */}

      {/* <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          // backgroundColor: "white",
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
      </Box> */}
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
                  toggleDrawer={toggleDrawer}
                  addProduct={addProduct}
                  removeProduct={removeProduct}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <Button
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          size="large"
          disableElevation
          style={{ borderRadius: "1rem", position: "sticky", bottom: "1rem" }}
          onClick={handleClickOpen}
        >
          {formatThousands(Number(calculateTotal()))}{" "}
          {restorant?.currency && currencies[restorant?.currency]}
        </Button>
      )}
      {dish && (
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
              borderRadius: "1rem",
            }}
          >
            <Puller />
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
                  // sx={{ padding: "0.25rem" }}
                  icon={<FavoriteBorderIcon sx={{ color: "#fff" }} />}
                  checkedIcon={<FavoriteIcon sx={{ color: "#fff" }} />}
                  onChange={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    console.log("like");
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
          </StyledBox>
        </SwipeableDrawer>
      )}
      <Cart
        cart={cart}
        open={openCart}
        onClose={handleClose}
        onAddProduct={addProduct}
        onRremoveProduct={removeProduct}
        onDeleteCart={deleteCart}
      />
    </Root>
  );
}

export default RestaurantPage;
