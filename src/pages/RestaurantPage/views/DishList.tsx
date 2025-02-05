import { restorant } from "../../../mock";
import DishCard from "../components/DishCard";

export default function DishList(params: any) {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        padding: "1rem 1rem 5rem",
      }}
    >
      {Array.isArray(restorant?.dishes) &&
      restorant?.dishes?.length > 0 ? (
        restorant?.dishes
          .filter((dish) => dish.groupId.includes(params.group.id))
          .map((dish) => {
            return (
              <DishCard
                key={dish.id}
                dish={dish}
                cart={params.cart}
                favorites={favorites}
                toggleDrawer={params.toggleDrawer}
                addProduct={params.onAddProduct}
                removeProduct={params.onRremoveProduct}
                saveFavorites={params.saveFavorites}
              />
            );
          })
      ) : (
        <span>Нет блюд</span>
      )}
    </div>
  );
}
