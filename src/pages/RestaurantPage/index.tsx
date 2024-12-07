import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { currencies, dishes, dishesGroup, restorants } from "../../mock";
import { Box, Button, CardActions, IconButton } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { formatThousands } from "../../utils";
import { useParams } from "react-router-dom";
import type { dishesT } from "../../types";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  top: -14,

  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

function RestaurantPage(props: Props) {
  //   const navigate = useNavigate();
  const [count, setCount] = React.useState<number>(1);
  const [sum, setSum] = React.useState<number>(0);
  const [dish, setDish] = React.useState<dishesT>();
  // const [dishSelected, setDishSelected] = React.useState<dishesT>();

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

  const handleChange = (value: dishesT) => {
    // console.log(newValue, "newValue");
    // document.location.href = `#${newValue}`; //// ????
    // if (groupRefs.current && groupRefs.current[newValue]) {
    //   (groupRefs?.current[newValue] as any).scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
    // setValue(newValue);
    // setDishSelected()
    setSum(sum + value.price);
  };

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
      <div
        style={{
          padding: "0 1rem 2rem",
          gap: "1rem",
        }}
      >
        {Object.keys(groupedDishes).map((groupId, index) => (
          <div
            id={String(index)}
            key={groupId}
            ref={(el) => ((groupRefs.current as any)[index] = el)}
          >
            <h3 style={{ textAlign: "left" }}>
              {dishesGroup.find((g) => String(g.id) === groupId)?.name}:
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              {groupedDishes[groupId].map((dish: dishesT) => (
                <Card
                  style={{ borderRadius: "1rem", backgroundColor: "#f8f8f8" }}
                  elevation={0}
                >
                  <CardActionArea onClick={toggleDrawer(dish)}>
                    <CardMedia
                      component="img"
                      height="140"
                      src={dish.image}
                      alt="restorant"
                    />
                    <CardContent
                      sx={{ textAlign: "left", padding: "0.5rem 0.5rem 0" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                        }}
                      >
                        {dish.name}{" "}
                        <small style={{ color: "#999" }}>{dish.weight}г</small>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      variant="outlined"
                      fullWidth
                      // color=""
                      size="small"
                      style={{
                        borderRadius: "1rem",
                        width: "100%",
                        backgroundColor: "white",
                      }}
                      onClick={() => handleChange(dish)}
                    >
                      {formatThousands(dish.price)}{" "}
                      {restorant?.currency && currencies[restorant?.currency]}
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      {sum > 0 && (
        <Button
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          style={{ borderRadius: "1rem", position: "sticky", bottom: "1rem" }}
        >
          {formatThousands(sum)}{" "}
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
          // style={{ borderRadius: "1rem" }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              // display: open ? "block" : "none",
              position: "absolute",
              top: -drawerBleeding,
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
            />
            <Box component="section" sx={{ p: 2 }}>
              <Typography variant="h5">
                {dish.name}{" "}
                <small style={{ color: "#999" }}>{dish.weight}г</small>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {dish?.compound}
              </Typography>
            </Box>
            <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
              <div style={{ backgroundColor: "#eee", borderRadius: "0.5rem" }}>
                <IconButton
                  aria-label="Remove"
                  onClick={() => setCount(count - 1)}
                >
                  <RemoveIcon />
                </IconButton>
                <span>{count}</span>
                <IconButton
                  aria-label="Add"
                  onClick={() => setCount(count + 1)}
                >
                  <AddIcon />
                </IconButton>
              </div>

              <Button
                variant="contained"
                disableElevation
                sx={{ flexGrow: 1, borderRadius: "1rem" }}
              >
                {formatThousands(dish?.price * count)}{" "}
                {restorant?.currency && currencies[restorant?.currency]}
              </Button>
            </div>
          </StyledBox>
          {/* <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox> */}
        </SwipeableDrawer>
      )}
    </Root>
  );
}

export default RestaurantPage;
