import { Divider, Stack, Typography } from "@mui/material";
import { restorantsT } from "../../../types";

export default function RestorantInfo(params: restorantsT) {
  return (
    <Stack spacing={2} sx={{ padding: "1rem" }}>
      <Typography
        variant="h4"
        noWrap
        sx={{
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {params.name}
      </Typography>
      <Typography variant="h6">{params.address}</Typography>
      <Divider variant="fullWidth" />
      <Typography variant="body1">
        {params.dishesGroup?.map((group) => group.name).join(" - ")}
      </Typography>
      <Divider variant="fullWidth" />
      <Typography variant="body2">{params.info}</Typography>
      <Divider variant="fullWidth" />
      <Typography variant="body2">{params.phone}</Typography>
      <Typography variant="body2">{params.email}</Typography>
    </Stack>
  );
}
