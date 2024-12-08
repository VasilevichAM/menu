import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { useParams } from "react-router-dom";
import { dishesGroup, restorants } from "../../mock";
import {
  // Avatar,
  Box,
  // Button,
  Tab,
  Tabs,
  // useScrollTrigger,
} from "@mui/material";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

// function ElevationScroll(props: Props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return children
//     ? React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//       })
//     : null;
// }

function Sidebar(props: Props) {
  const { id = "0" } = useParams<{ id: string }>();
  const restorant = restorants.find(
    (restorant: { id: number }) => restorant.id === Number(id)
  );

  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  let language = window.navigator.language;
  // let languageFistTwo = language.substr(0, 2); // To only keep the first 2 characters.
  console.log(language, "languageFistTwo");
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue, "newValue");
    document.location.href = `#${newValue}`; //// ????
    // if (groupRefs.current && groupRefs.current[newValue]) {
    //   (groupRefs?.current[newValue] as any).scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
    setValue(newValue);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "16rem",
          backgroundImage: `url(${restorant?.image})`,
          backgroundSize: "contain",
          position: "absolute",
          top: 0,
        }}
      />
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        style={{ borderRadius: "1rem 1rem 0 0", marginTop: "14.5rem" }}
      >
        <Container maxWidth="xl" sx={{ padding: 0 }}>
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              sx={{
                paddingLeft: "1rem",
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {restorant?.name || "Logo"}
            </Typography>
          </Toolbar>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "white",
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
        </Container>
      </AppBar>
    </>
  );
}
export default Sidebar;
