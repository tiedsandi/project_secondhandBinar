import React from "react";
import { Box, Button } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ButtonClick from "../global/ButtonClick";
import { useDispatch, useSelector } from "react-redux";
import { BidStatus } from "../../redux/transaction";
import { useParams } from "react-router-dom";
import InfoPenjual from "../../containers/global/InfoPenjual";

const drawerBleeding = 20;
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
  width: 70,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[400],
  borderRadius: 3,
  position: "relative",
  top: 16,
  left: "calc(50% - 30px)",
}));

const DrawerProductMatch = () => {
  const [open, setOpen] = React.useState(false);
  const id_transaction = useParams().id;
  const transaction = useSelector((state) => state.transaction.transaction);
  const profile = useSelector((state) => state.profile.profile.data);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    const bid_status = "1";
    dispatch(BidStatus({ id_transaction, data: { bid_status } })).then(() => {
      window.location.reload();
    });
  };

  const handleReject = () => {
    const bid_status = "2";
    dispatch(BidStatus({ id_transaction, data: { bid_status } })).then(() => {
      window.location.href = "/daftar-jual";
    });
  };

  return (
    <Box
      data-testid="drawer-product-match"
      display={"flex"}
      justifyContent={"center"}
    >
      <Box width={"50%"} mr={2}>
        <ButtonClick title={"Tolak"} onClick={handleReject} />
      </Box>
      <Box width={"50%"}>
        <ButtonClick
          onClick={handleClickOpen}
          title={
            <Box display={"flex"} alignItems="center" justifyContent={"center"}>
              Terima
            </Box>
          }
          primary
        />
      </Box>

      {/* Drawer */}
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
          anchor="bottom"
          open={open}
          onOpen={handleClickOpen}
          onClose={handleClose}
          onClick={handleClose}
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
              <Typography
                id="drawer-drawer-title"
                fontSize={"12px"}
                fontWeight={400}
              >
                Yeay kamu berhasil mendapat harga yang sesuai
              </Typography>
              <Typography
                id="drawer-drawer-description"
                fontSize={"12px"}
                fontWeight={400}
                color={"#8A8A8A"}
                mt={1}
              >
                Segera hubungi pembeli melalui whatsapp untuk transaksi
                selanjutnya
              </Typography>
            </Box>

            {/* Product Match */}
            <Box
              borderRadius="16px"
              backgroundColor="#FFFFFF"
              boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.15)"}
              my={2}
            >
              <Typography
                textAlign={"center"}
                p={2}
                fontSize={12}
                fontWeight={400}
              >
                Product Match
              </Typography>
              {/* User */}
              <Box display="flex" fontSize={12} fontWeight={400}>
                <Box display="flex" justifyContent="center" mx={2} mb={1}>
                  <InfoPenjual id={transaction.data?.buyer.id} />
                </Box>
              </Box>

              {/* Product */}
              <Box display="flex">
                <Box
                  component="img"
                  alt="camera"
                  src={transaction.data?.product.product_pictures[0].picture}
                  borderRadius="16px"
                  width="48px"
                  height="48px"
                  margin={2}
                  mt={0}
                />
                <Box>
                  <Typography fontSize={12} fontWeight={400}>
                    {transaction.data?.product.product}{" "}
                  </Typography>
                  <Typography
                    style={{
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                    }}
                    fontSize={12}
                    fontWeight={400}
                  >
                    Rp.{" "}
                    {transaction.data?.product.price.toLocaleString("id-ID")}
                  </Typography>
                  <Typography fontSize={12} fontWeight={400}>
                    Ditawar Rp{" "}
                    {transaction.data?.bid_price.toLocaleString("id-ID")}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Button */}
            <Button
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                borderRadius: "16px",
                color: "white",
                backgroundColor: "#7126B5",
                width: "100%",
                textTransform: "none",
              }}
              variant="contained"
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=${profile.number_phone}`)}
            >
              Hubungi via WhatsApp &nbsp;
              <WhatsAppIcon />
            </Button>
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </Box>
  );
};

export default DrawerProductMatch;
