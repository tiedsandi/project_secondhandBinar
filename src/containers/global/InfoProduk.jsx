import { useMediaQuery, Typography } from "@mui/material";
import React from "react";

const InfoProduk = ({ product }) => {
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <React.Fragment data-testid="info-produk">
      {isMobile ? (
        <>
          <Typography variant="subtitle1" fontSize={".85rem"} mb={1} noWrap>
            {product.product}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            fontSize={".7rem"}
            mb={1}
          >
            {product.category.category}
          </Typography>
          <Typography variant="subtitle2" fontSize={".8rem"}>
            Rp. {product.price.toLocaleString("id-ID")}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="subtitle1" mb={1}>
            {product.product}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={1}>
            {product.category.category}
          </Typography>
          <Typography variant="subtitle2">
            Rp. {product.price.toLocaleString("id-ID")}
          </Typography>
        </>
      )}
    </React.Fragment>
  );
};

export default InfoProduk;
