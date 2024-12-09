import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { orders } from "../../mock";
import { formatThousands } from "../../utils";

export default function OrdersPage() {
  return (
    <div>
      <List>
        {orders.map((order) => {
          return (
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>{order.table}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={order.order.length}
                secondary={order.time}
              />
              <Typography variant="h6">
                {formatThousands(order.total)}
              </Typography>
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
}
