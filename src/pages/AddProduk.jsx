import React from "react";
import { useMediaQuery } from "@mui/material";
import AddProdukField from "../components/fields/AddProdukField";
import HeaderM from "../containers/mobile/HeaderM";
import { Box } from "@mui/material";
import Header from "../containers/web/Header";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorys } from "../redux/category";

const AddProduk = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.category.loading);

  React.useEffect(() => {
    dispatch(fetchCategorys());
  }, [dispatch]);
  return (
    <>
      {isMobile ? (
        <>
          <HeaderM title={"Lengkapi Detail Produk"} />
          <Box data-testid="add-produkM-page" p={1.5} alignItems="center">
            {loading ? <div>Loading...</div> : <AddProdukField />}
          </Box>
        </>
      ) : (
        <>
          <Header title={"Lengkapi Detail Produk"} />
          <Box
            data-testid="add-produk-page"
            display="flex"
            justifyContent="center"
            margin="2rem"
          >
            <Box display="flex" width="4rem" color="black">
              <Link to="/daftar-jual">
                <ArrowBackOutlinedIcon />
              </Link>
            </Box>
            {loading ? <div>Loading...</div> : <AddProdukField />}
          </Box>
        </>
      )}
    </>
  );
};

export default AddProduk;
