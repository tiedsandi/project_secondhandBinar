import { Box, Link } from "@mui/material";
import React from "react";
import InfoProduk from "../global/InfoProduk";
import { useSelector } from "react-redux";

const CardProduk = ({ product }) => {
  const dataProfile = useSelector((state) => state.profile.profile_data);
  const uid = localStorage.getItem("uid", true);
  return (
    <Box
      data-testid="card-produk-web"
      component={Link}
      href={dataProfile ? "/daftar-jual/" + product.id : `/profile/${uid}`}
      p={1}
      sx={{
        width: "342px",
        textDecoration: "none",
        cursor: "pointer",
        borderRadius: "10px",
        color: "black",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box>
        <Box
          component={"img"}
          src={product.product_pictures[0].picture}
          image
          width={"100%"}
          height={"10rem"}
          borderRadius={2}
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <InfoProduk key={product.id} product={product} />
    </Box>
  );
};

export default CardProduk;
