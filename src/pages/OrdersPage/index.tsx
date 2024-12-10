import {
  Avatar,
  Badge,
  Checkbox,
  List,
  // ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  // Typography,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
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
                <Badge color="primary" badgeContent={order.order.length}>
                  <Avatar>{order.table}</Avatar>
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={formatThousands(order.total) + "$"}
                secondary={order.time}
              />
              {/* <Typography variant="h6">
                {formatThousands(order.total)}
              </Typography> */}
              <Checkbox
                aria-label="Переключить светлую/темную тему"
                icon={<NotificationsNoneIcon />}
                checkedIcon={<NotificationsActiveIcon />}
                onChange={() => window.navigator.vibrate(200)}
              />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
}
