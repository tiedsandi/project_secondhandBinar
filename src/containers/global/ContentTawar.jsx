import React from "react";
import { Box, Button, Typography } from "@mui/material";

import FormInput from "../../components/global/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { BuyerBid } from "../../redux/transaction";

const ContentTawar = ({ data }) => {
  const img = useSelector((state) => state.product.img);
  const [price, setPrice] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataInput = {
      product_id: data.data.id,
      bid_price: price,
    };
    dispatch(BuyerBid(dataInput));
  };
  return (
    <div>
      <Box mt={4} data-testid="content-tawar-global">
        <Typography id="drawer-drawer-title" variant="h6" component="h2">
          Masukan Harga Tawarmu
        </Typography>
        <Typography
          id="drawer-drawer-description"
          sx={{ mt: 2, fontWeight: 360 }}
        >
          Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
          segera dihubungi penjual.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        borderRadius="16px"
        backgroundColor="white"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.15)"
        width="22rem"
        mb={4}
        mt={2}
      >
        <Box
          display="flex"
          component="img"
          alt="camera"
          src={img[0].picture}
          borderRadius="16px"
          justifyContent="center"
          alignItems="center"
          width="6rem"
          margin={2}
        />
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          borderRadius="16px"
        >
          {data.data.product}
          <br />
          Rp. {data.data.price.toLocaleString("id-ID")}
        </Box>
      </Box>
      <Box
        width={"22rem"}
        sx={{
          margin: "2 auto",
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
          fontWeight: "bold",
          borderRadius: "16px",
          color: "white",
          backgroundColor: "#7126B5",
          height: "3rem",
          width: "22rem",
          textTransform: "none",
        }}
        onClick={handleSubmit}
        variant="contained"
      >
        Kirim
      </Button>
    </div>
  );
};

export default ContentTawar;
