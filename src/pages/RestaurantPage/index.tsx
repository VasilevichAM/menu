import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { dishes, dishesGroup } from "../../mock";
// import { useParams } from "react-router-dom";
import { Button, CardActions } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Skeleton from "@mui/material/Skeleton";
// import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
  backgroundColor: grey[100],
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
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
  const [dish, setDish] = React.useState<any>();
  // const { id = "0" } = useParams<{ id: string }>();
  // const restorant = restorants.find(
  //   (restorant: { id: number }) => restorant.id === Number(id)
  // );

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    if (typeof newOpen !== "boolean") setDish(newOpen);
    setOpen(Boolean(newOpen));
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [value, setValue] = useState(0);
  const groupRefs = useRef({});

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // console.log(newValue, "newValue");
    // document.location.href = `#${newValue}`; //// ????
    // if (groupRefs.current && groupRefs.current[newValue]) {
    //   (groupRefs?.current[newValue] as any).scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
    setValue(newValue);
  };

  const groupedDishes = dishes.reduce((acc: any, dish) => {
    // Проверяем, существует ли группа в аккумуляторе
    if (!acc[dish.groupId]) {
      acc[dish.groupId] = []; // Если нет, создаем новый массив для группы
    }
    acc[dish.groupId].push(dish); // Добавляем блюдо в соответствующую группу
    return acc;
  }, {});

  console.log(groupedDishes, "groupedDishes");
  // const scrollToGroup = (groupId) => {
  //   if (groupRefs.current[groupId]) {
  //     groupRefs.current[groupId].scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(95%)`,
            overflow: "visible",
          },
        }}
      />
      {/* <div
      // style={{
      //   width: "100%",
      //   height: "20rem",
      //   backgroundImage: `url(${restorant?.image})`,
      // }}
      >
        <h1>{restorant?.name}</h1>
      </div> */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          //   aria-label="basic tabs example"\
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {dishesGroup.map((group) => (
            <Tab key={group.id} label={group.name} />
          ))}
        </Tabs>
      </Box>
      <div
        style={{
          padding: "1rem",
          //   display: "grid",
          //   gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        {Object.keys(groupedDishes).map((groupId, index) => (
          <div
            id={String(index)}
            key={groupId}
            ref={(el) => ((groupRefs.current as any)[index] = el)}
          >
            <h3>{dishesGroup.find((g) => String(g.id) === groupId)?.name}:</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              {groupedDishes[groupId].map((dish: any) => (
                <Card style={{ borderRadius: "1rem" }} elevation={0}>
                  <CardActionArea onClick={toggleDrawer(dish)}>
                    <CardMedia
                      component="img"
                      height="140"
                      src={dish.image}
                      alt="restorant"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {dish.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ borderRadius: "1rem", width: "100%" }}
                    >
                      {dish.price}
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        ))}
        {/* {dishes.map((dish) => (
          <Card style={{ borderRadius: "1rem" }} elevation={0}>
            <CardActionArea onClick={toggleDrawer(dish)}>
              <CardMedia
                component="img"
                height="140"
                src={dish.image}
                alt="restorant"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {dish.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="outlined"
                size="small"
                style={{ borderRadius: "1rem", width: "100%" }}
              >
                {dish.price}
              </Button>
            </CardActions>
          </Card>
        ))} */}
      </div>
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
              height: "20rem",
              backgroundImage: `url(${dish?.image})`,
            }}
          ></div>
          <div>
            <Typography sx={{ p: 2, color: "text.secondary" }}>
              {dish?.name || ""}
            </Typography>
            <Button variant="contained">Добавить</Button>
          </div>
        </StyledBox>
        {/* <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox> */}
      </SwipeableDrawer>
    </Root>
  );
}

export default RestaurantPage;
