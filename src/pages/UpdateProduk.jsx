import React from "react";
import { useMediaQuery } from "@mui/material";
import UpdateProdukField from "../components/fields/UpdateProdukField";
import HeaderM from "../containers/mobile/HeaderM";
import { Box } from "@mui/material";
import Header from "../containers/web/Header";
import { Link, useParams } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorys } from "../redux/category";
import { fetchProductItem } from "../redux/product";

const UpdateProduk = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.category.loading);
  const idProduk = useParams().id;
  const detail = useSelector((state) => state.product.productsDetail.data);

  React.useEffect(() => {
    dispatch(fetchCategorys());
    dispatch(fetchProductItem(idProduk));
  }, [dispatch, idProduk]);
  return (
    <>
      {isMobile ? (
        <>
          <HeaderM title={"Lengkapi Detail Produk"} />
          <Box p={1.5} alignItems="center">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>{detail && <UpdateProdukField />}</>
            )}
          </Box>
        </>
      ) : (
        <>
          <Header title={"Lengkapi Detail Produk"} />
          <Box
            data-testid="update-produk-page"
            display="flex"
            justifyContent="center"
            margin="2rem"
          >
            <Box display="flex" width="4rem" color="black">
              <Link to="/daftar-jual">
                <ArrowBackOutlinedIcon />
              </Link>
            </Box>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>{detail && <UpdateProdukField />}</>
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default UpdateProduk;
