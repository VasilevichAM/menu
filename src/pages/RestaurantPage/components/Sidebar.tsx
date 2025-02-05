import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useParams } from "react-router-dom";
import { restorant } from "../../../mock";
import React from "react";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import {
  Favorite,
  Info,
  ReceiptLong,
  Search,
  Share,
} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "react-i18next";

function Sidebar(params: any) {
  // const { id = "0" } = useParams<{ id: string }>();
  const { t } = useTranslation(["dish"]);
  // const { mode, setMode } = useColorScheme();
  // if (!mode) {
  //   return null;
  // }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Заголовок вашей ссылки",
          text: "Текст для общего доступа",
          url: "https://example.com", // Замените на вашу ссылку
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
    <>
      <div
        style={{
          width: "100%",
          aspectRatio: 16 / 9,
          backgroundImage: `url(${restorant?.image})`,
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          textAlign: "end",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "3rem",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0,0.3)",
            margin: "1rem",
          }}
        >
          <IconButton sx={{ color: "#fff" }} onClick={handleShare} size="small">
            <Share />
          </IconButton>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0,0.3)",
            margin: "1rem",
          }}
        >
          <Tooltip title="Account settings">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </div>
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0,0.3)",
            margin: "1rem",
          }}
        >
          <Checkbox
            aria-label="Переключить светлую/темную тему"
            icon={<DarkModeIcon sx={{ color: "#fff" }} />}
            checkedIcon={<LightModeIcon sx={{ color: "#fff" }} />}
            onChange={(e) =>
              setMode(Boolean(e.currentTarget.checked) ? "dark" : "light")
            }
          />
        </div> */}
      </div>

      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        style={{ borderRadius: "1rem 1rem 0 0", marginTop: "14rem" }}
      >
        <Container maxWidth="xl" sx={{ padding: 0 }}>
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              sx={{
                padding: "1rem",
                // display: { xs: "flex", md: "none" },
                display: "flex",
                justifyContent: "space-between",
                flexGrow: 1,

                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {restorant?.name || "Logo"}
              <IconButton
                sx={{ color: "#ccc" }}
                onClick={params.toggleDrawerInfo}
                size="small"
              >
                <Info />
              </IconButton>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{ borderRadius: "0.5rem" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            params.setOpenSearch(true);
          }}
        >
          <ListItemIcon>
            <Search fontSize="small" />
          </ListItemIcon>
          {t("search")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            params.setOpenFavorite(true);
          }}
        >
          <ListItemIcon>
            <Favorite fontSize="small" />
          </ListItemIcon>
          {t("favorite")}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ReceiptLong fontSize="small" />
          </ListItemIcon>
          {t("orderHistory")}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Info fontSize="small" />
          </ListItemIcon>
          {t("info")}
        </MenuItem>
      </Menu>
    </>
  );
}
export default Sidebar;
