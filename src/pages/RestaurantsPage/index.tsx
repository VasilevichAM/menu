import CardRestorant from "./Card";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RestaurantsPage() {
  return (
    <div style={{ padding: "1rem", display: "grid", gap: "1rem" }}>
      <CardRestorant label={label} />
      <CardRestorant label={label} />
      <CardRestorant label={label} />
    </div>
  );
}

export default RestaurantsPage;
