import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import { useDispatch } from "react-redux";
import { BuyerBid } from "../../redux/transaction";

const drawerBleeding = 16;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 60,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[400],
  borderRadius: 3,
  position: "relative",
  top: 16,
  left: "calc(50% - 30px)",
}));

const DrawerTawar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = React.useState("");
  const { window } = props;
  const { data } = props;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataInput = {
      product_id: data.data.id,
      bid_price: price,
    };
    dispatch(BuyerBid(dataInput));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box data-testid="drawer-tawar">
      <ButtonClick
        title="Saya tertarik dan ingin nego"
        primary
        onClick={handleClickOpen}
      />

      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(70% - ${drawerBleeding}px)`,
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={handleClose}
          onOpen={handleClickOpen}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              visibility: "invisible",
              right: 0,
              left: 0,
              height: "100%",
              px: 4,
              overflow: "auto",
            }}
          >
            <Puller />
            <Box mt={4}>
              <Typography id="drawer-drawer-title" fontWeight={500}>
                Masukan Harga Tawarmu
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "#8A8A8A",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
                akan segera dihubungi penjual.
              </Typography>
            </Box>
            {/* product */}
            <Box
              borderRadius="16px"
              backgroundColor="#FFFFFF"
              boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.15)"}
              my={2}
            >
              {/* detail product*/}
              <Box display="flex" fontSize={12} fontWeight={400}>
                <Box
                  component="img"
                  alt="camera"
                  src={data.data?.product_pictures[0].picture}
                  borderRadius="16px"
                  width="48px"
                  height="48px"
                  margin={2}
                />
                <Box mt={3}>
                  {data.data?.product} <br />
                  Rp. {data.data?.price.toLocaleString("id-ID")}
                </Box>
              </Box>
            </Box>
            <Box
              width={"16rem"}
              sx={{
                margin: "1 auto",
              }}
            >
              <FormInput
                label="Harga Tawar"
                value={price}
                setValue={setPrice}
                placeholder="Rp 0,00"
                type={"text"}
              />
            </Box>
            <Button
              sx={{
                fontWeight: "400",
                borderRadius: "16px",
                color: "white",
                backgroundColor: "#7126B5",
                height: "2rem",
                width: "16rem",
                textTransform: "none",
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Kirim
            </Button>
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </Box>
  );
};

export default DrawerTawar;
