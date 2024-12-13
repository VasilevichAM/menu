import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useParams } from "react-router-dom";
import { restorants } from "../../mock";
import { Checkbox, useColorScheme } from "@mui/material";

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
          <Checkbox
            aria-label="Переключить светлую/темную тему"
            icon={<DarkModeIcon sx={{ color: "#fff" }} />}
            checkedIcon={<LightModeIcon sx={{ color: "#fff" }} />}
            onChange={(e) =>
              setMode(Boolean(e.currentTarget.checked) ? "dark" : "light")
            }
          />
        </div>
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
    </>
  );
}
export default Sidebar;
