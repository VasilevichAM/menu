import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor: "#fff",
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.background.default,
    }),
  }));
  
  export const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: "1rem 1rem 0 0",
    ...theme.applyStyles("dark", {
      backgroundColor: grey[800],
    }),
  }));
  
  export const Puller = styled("div")(({ theme }) => ({
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