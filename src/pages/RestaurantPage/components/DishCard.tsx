import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { currencies, restorants } from "../../../mock";
import { Button, CardActions, Checkbox, Chip, IconButton } from "@mui/material";
import { formatThousands } from "../../../utils";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Star } from "@mui/icons-material";

export default function DishCard(params: any) {
  const { dish } = params;

  return (
    <Card
      sx={{
        position: "relative",
      }}
      variant="outlined"
      elevation={0}
    >
      <CardActionArea
        sx={{ flexGrow: 1, marginBottom: "46px" }}
        onClick={params.toggleDrawer(dish)}
      >
        <CardMedia
          component="img"
          height="140"
          src={dish.image}
          alt="restorant"
        />

        <CardContent
          sx={{
            textAlign: "left",
            padding: "0.5rem 0.5rem 0",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="body2"
              className="dish-name"
              sx={{
                color: "text.secondary",
              }}
            >
              {dish.name}
            </Typography>
            <div
              style={{
                display: "flex",

                alignItems: "center",
              }}
            >
              <Star
                sx={{ fontSize: "12px", marginRight: "4px" }}
                color="primary"
              />
              <small>4.5</small>
            </div>
          </div>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {dish.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        {params.cart.find((d: { id: number }) => d.id === dish.id)?.quantity ? (
          <>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => params.removeProduct(dish.id)}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <div style={{ display: "grid" }}>
              <small>
                {
                  params.cart.find((d: { id: number }) => d.id === dish.id)
                    ?.quantity
                }
              </small>
            </div>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => params.addProduct(dish)}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          <Button
            variant="outlined"
            fullWidth
            color="secondary"
            size="small"
            onClick={() => params.addProduct(dish)}
          >
            {formatThousands(dish.price)}{" "}
            {restorants[0].currency && currencies[restorants[0]?.currency]}
          </Button>
        )}
      </CardActions>

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          borderRadius: "50%",
          margin: "0.5rem",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Checkbox
          aria-label="FavoritDish"
          checked={
            Array.isArray(params.favorites) &&
            params.favorites.includes(dish.id)
          }
          size="small"
          sx={{ padding: "0.25rem" }}
          icon={
            <FavoriteBorderIcon sx={{ color: "#fff", padding: "0.1rem" }} />
          }
          checkedIcon={
            <FavoriteIcon sx={{ color: "#fff", padding: "0.1rem" }} />
          }
          onChange={(e) => {
            e.stopPropagation();
            params.saveFavorites(dish.id);
          }}
        />
      </div>
    </Card>
  );
}
