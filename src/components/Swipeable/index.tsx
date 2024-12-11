import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "swiper/css";
import { Puller, StyledBox } from "./styled";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerBleeding = 0;

export default function Swipeable(props: Props & any) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <SwipeableDrawer
      sx={{ zIndex: 1301 }}
      container={container}
      anchor="bottom"
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
      swipeAreaWidth={drawerBleeding}
      {...props}
    >
      <StyledBox
        sx={{
          position: "absolute",
          top: drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          right: 0,
          left: 0,
          borderRadius: "1rem",
        }}
      >
        <Puller />
        {props.children}
      </StyledBox>
    </SwipeableDrawer>
  );
}
