import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { restorant } from "../../mock";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function CardRestorant({ label }: { label: any }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea onClick={() => navigate("/restaurant/" + restorant.id)}>
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
        {/* <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {restorant.name}
          <div>
            <StarIcon fontSize="small" />
            {restorant.rating || 0}
          </div>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {restorant.type}
        </Typography>
      </CardContent> */}
      </CardActionArea>
    </Card>
  );
}

export default CardRestorant;
