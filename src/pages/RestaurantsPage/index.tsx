import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { restorants } from "../../mock";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RestaurantsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "1rem", display: "grid", gap: "1rem" }}>
      {restorants.map((restorant) => (
        <Card style={{ borderRadius: "1rem" }}>
          <CardActionArea
            onClick={() => navigate("/restaurant/" + restorant.id)}
          >
            <CardMedia
              component="img"
              height="140"
              src={restorant.image}
              alt="restorant"
            />
            <Checkbox
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                background: "white",
                opacity: "0.8",
                // zIndex: "1000",
              }}
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              onClick={(e) => {
                e.stopPropagation();
                console.log("111");
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {restorant.name}
                <div>
                  <StarIcon fontSize="small" />
                  {restorant.range}
                </div>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {restorant.type}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default RestaurantsPage;
