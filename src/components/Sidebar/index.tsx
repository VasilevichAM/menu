import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { restorant } from "../../mock";
import React from "react";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Favorite, Info, ReceiptLong, Search } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { id = "0" } = useParams<{ id: string }>();
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

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "16rem",
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
        style={{ borderRadius: "1rem 1rem 0 0", marginTop: "14.5rem" }}
      >
        <Container maxWidth="xl" sx={{ padding: 0 }}>
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              sx={{
                padding: "1rem",
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {restorant?.name || "Logo"}
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Search fontSize="small" />
          </ListItemIcon>
          Search
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Favorite fontSize="small" />
          </ListItemIcon>
          {t("favorites")}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ReceiptLong fontSize="small" />
          </ListItemIcon>
          ReceiptLong
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Info fontSize="small" />
          </ListItemIcon>
          Info
        </MenuItem>
      </Menu>
    </>
  );
}
export default Sidebar;
