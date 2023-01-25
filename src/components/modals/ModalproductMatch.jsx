import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@mui/material";
import ButtonClick from "../global/ButtonClick";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useDispatch, useSelector } from "react-redux";
import { BidStatus } from "../../redux/transaction";
import { useParams } from "react-router-dom";
import InfoPenjual from "../../containers/global/InfoPenjual";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
    width: 360,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 14,
            top: 6,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const ModalproductMatch = ({ transaction }) => {
  const [open, setOpen] = React.useState(false);
  // const [bid_status, setBid_status] = React.useState('0');
  const id_transaction = useParams().id;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile.data);

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
      data-testid="modal-product-match"
      display={"flex"}
      width={"100%"}
      height={"max-content"}
      justifyContent="flex-end"
      mb={3}
    >
      {/* Button Product Match */}
      <Box width={"20%"} mr={2}>
        <ButtonClick title={"Tolak"} onClick={handleReject} />
      </Box>
      <Box width={"20%"}>
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

      {/* Modal Product Match */}
      <BootstrapDialog
        open={open}
        PaperProps={{
          style: { borderRadius: 16 },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClick={handleClose}
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Typography
            gutterBottom
            fontWeight={500}
            fontSize={14}
            color={"#000000"}
            mt={2}
          >
            Yeay kamu berhasil mendapat harga yang sesuai
          </Typography>
          <Typography
            gutterBottom
            fontWeight={400}
            color={"#8A8A8A"}
            fontSize={14}
            mb={2}
          >
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </Typography>

          <Box borderRadius="16px" backgroundColor="#EEEEEE">
            <Typography textAlign={"center"} p={2}>
              Product Match
            </Typography>
            {/* User */}
            <Box display="flex" mx={2} mb={1}>
              <InfoPenjual id={transaction.buyer.id} />
            </Box>

            {/* Product */}
            <Box display="flex">
              <Box
                component="img"
                alt="camera"
                src={transaction.product.product_pictures[0].picture}
                borderRadius="16px"
                width="68px"
                height="68px"
                margin={2}
                mt={0}
              />

              <Typography alignItems="center">
                <Typography>{transaction.product.product} </Typography>
                <Typography
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  Rp. {transaction.product.price.toLocaleString("id-ID")}
                </Typography>
                <Typography>
                  {" "}
                  Ditawar Rp {transaction.bid_price.toLocaleString("id-ID")}
                </Typography>
              </Typography>
            </Box>
          </Box>

          {/* Button */}
          <Box width={"100%"}>
            <ButtonClick
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=${profile.number_phone}`)}
              title={
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  Hubungi via WhatsApp &nbsp;
                  <WhatsAppIcon />
                </Box>
              }
              primary
            />
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
};

export default ModalproductMatch;
