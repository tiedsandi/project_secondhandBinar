import { useEffect } from "react";
import React from "react";
import { Box, useMediaQuery, Grid, Typography } from "@mui/material";
import CardProduk from "../containers/web/CardProduk";
import Carousel from "../containers/web/Carousel";
import Header from "../containers/web/Header";
import CardProdukM from "../containers/mobile/CardProdukM";
import HomeUpM from "../containers/mobile/HomeUpM";
import ButtonJualHome from "../components/buttons/ButtonJualHome";
import SetKategori from "../containers/global/SetKategori";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchProductsUser } from "../redux/product";
import { GetProfile } from "../redux/profile";
import { fetchCategorys } from "../redux/category";

const Home = () => {
  const [kategory, setKategory] = React.useState("Semua");
  const products = useSelector((state) => state.product.products);
  const category = useSelector((state) => state.category.categorys);
  const productAktif = useSelector((state) => state.product.productAktif);
  const dataProfile = useSelector((state) => state.profile.profileData);
  const search = useSelector((state) => state.search.search);
  console.log(search);
  const uid = localStorage.getItem("uid", true);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width:425px)");

  useEffect(() => {
    if (kategory === "Semua") {
      const idKategory = false;
      dispatch(fetchProducts({ idKategory, search }));
    } else {
      const idKategory = category.find(
        (product) => product.category === kategory
      ).id;
      dispatch(fetchProducts({ idKategory, search }));
    }
    dispatch(fetchProductsUser());
    dispatch(fetchCategorys());
    dispatch(GetProfile(uid));
  }, [dispatch, uid, kategory, search]);
  return (
    <>
      {isMobile ? (
        <Box>
          <HomeUpM kategory={kategory} setKategory={setKategory} />
          {productAktif.length < 4 && dataProfile && <ButtonJualHome />}

          <Box
            gap={1.5}
            p={2}
            sx={{ display: "flex", flexWrap: "wrap" }}
            width="100%"
          >
            {products.data && products.data.length > 0 ? (
              products.data.map((product) => (
                <React.Fragment key={product.id}>
                  {product.status === 1 && (
                    <Grid
                      item
                      lg={1.8}
                      // mb={2}
                      sx={{ display: "flex" }}
                    >
                      <CardProdukM key={product.id} product={product} />
                    </Grid>
                  )}
                </React.Fragment>
              ))
            ) : (
              <Typography variant="h6">Produk tidak ditemukan</Typography>
            )}
          </Box>
        </Box>
      ) : (
        <>
          <Header />
          <Carousel />
          <Box mx={16} mt={4}>
            <Typography fontWeight={"700"} mb={2} textTransform="none">
              Telusuri Kategori
            </Typography>
            <SetKategori kategory={kategory} setKategory={setKategory} />
          </Box>

          <Box data-testid="home-page" mx={"8rem"} mt={4} display="flex">
            {productAktif.length < 4 && dataProfile && <ButtonJualHome />}
            <Box display="flex" flexWrap="wrap" sx={{ width: "100%" }}>
              <Grid container gap={2} width="100%">
                {products.data && products.data.length > 0 ? (
                  products.data.map((product) => (
                    <React.Fragment key={product.id}>
                      {product.status === 1 && (
                        <Grid
                          item
                          lg={1.8}
                          mb={2}
                          sx={{ display: "flex", width: "100%" }}
                        >
                          <CardProduk product={product} />
                        </Grid>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <Typography variant="h6">Produk tidak ditemukan</Typography>
                )}
              </Grid>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
