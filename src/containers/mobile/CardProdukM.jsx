import { Box, Link } from "@mui/material";
import InfoProduk from "../global/InfoProduk";
import { useSelector } from "react-redux";

const CardProdukM = ({ product }) => {
  const dataProfile = useSelector((state) => state.profile.profile_data);
  const uid = localStorage.getItem("uid", true);

  return (
    <Box
      data-testid="card-produk-mobile"
      component={Link}
      // href={"/daftar-jual/" + product.id}
      href={dataProfile ? "/daftar-jual/" + product.id : `/profile/${uid}`}
      p={1}
      sx={{
        width: "8.6rem",
        height: "calc(10.5rem + 2px)",
        textDecoration: "none",
        borderRadius: "10px",
        color: "black",
        flex: "0 0 auto",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box>
        <Box
          component={"img"}
          src={product.product_pictures[0].picture}
          width={"100%"}
          height={"5rem"}
          borderRadius={2}
        />
      </Box>
      <InfoProduk key={product.id} product={product} />
    </Box>
  );
};

export default CardProdukM;
