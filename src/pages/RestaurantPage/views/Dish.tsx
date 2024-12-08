// import {
//   Box,
//   Button,
//   styled,
//   SwipeableDrawer,
//   Typography,
// } from "@mui/material";
// import { grey } from "@mui/material/colors";
// import { formatThousands } from "../../../utils";

// const StyledBox = styled("div")(({ theme }) => ({
//   backgroundColor: "#fff",
//   borderRadius: "1rem 1rem 0 0",
//   ...theme.applyStyles("dark", {
//     backgroundColor: grey[800],
//   }),
// }));

// const Puller = styled("div")(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: grey[300],
//   borderRadius: 3,
//   position: "absolute",
//   top: -14,

//   left: "calc(50% - 15px)",
//   ...theme.applyStyles("dark", {
//     backgroundColor: grey[900],
//   }),
// }));

// const drawerBleeding = 0;

// export default function Dish(params: any) {
//   return (
//     <SwipeableDrawer
//       container={container}
//       anchor="bottom"
//       open={open}
//       onClose={toggleDrawer(false)}
//       onOpen={toggleDrawer(true)}
//       swipeAreaWidth={drawerBleeding}
//       disableSwipeToOpen={false}
//       ModalProps={{
//         keepMounted: true,
//       }}
//     >
//       <StyledBox
//         sx={{
//           // display: open ? "block" : "none",
//           position: "absolute",
//           top: -drawerBleeding,
//           borderTopLeftRadius: 8,
//           borderTopRightRadius: 8,
//           visibility: "visible",
//           right: 0,
//           left: 0,
//           borderRadius: "1rem",
//         }}
//       >
//         <Puller />
//         <div
//           style={{
//             width: "100%",
//             borderRadius: "1rem 1rem 0 0",
//             height: "20rem",
//             backgroundImage: `url(${dish?.image})`,
//           }}
//         />
//         <Box component="section" sx={{ p: 2 }}>
//           <Typography variant="h5">
//             {dish.name} <small style={{ color: "#999" }}>{dish.weight}г</small>
//           </Typography>
//           <Typography sx={{ color: "text.secondary" }}>
//             {dish?.compound}
//           </Typography>
//         </Box>
//         <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
//           <DeleteAddButtons count={count} setCount={setCount} />

//           <Button
//             variant="contained"
//             disableElevation
//             sx={{ flexGrow: 1, borderRadius: "1rem" }}
//           >
//             {formatThousands(dish?.price * count)}{" "}
//             {restorant?.currency && currencies[restorant?.currency]}
//           </Button>
//         </div>
//       </StyledBox>
//     </SwipeableDrawer>
//   );
// }
