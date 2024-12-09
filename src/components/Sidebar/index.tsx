import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useParams } from "react-router-dom";
import { restorants } from "../../mock";
import { Checkbox, IconButton, useColorScheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function Sidebar() {
  const { id = "0" } = useParams<{ id: string }>();
  const restorant = restorants.find(
    (restorant: { id: number }) => restorant.id === Number(id)
  );
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

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
        <Checkbox
          aria-label="Переключить светлую/темную тему"
          sx={{ margin: "1rem" }}
          icon={<LightModeIcon color="primary" />}
          checkedIcon={<DarkModeIcon color="primary" />}
          onChange={(e) =>
            setMode(Boolean(e.currentTarget.checked) ? "dark" : "light")
          }
        />
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
            {id && (
              <IconButton
                aria-label="delete"
                onClick={() => console.log("MoreVertIcon")}
              >
                <MoreVertIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Sidebar;
