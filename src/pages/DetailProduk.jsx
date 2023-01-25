import React, { useEffect } from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Header from "../containers/web/Header";
import ImageSlider from "../components/web/ImageSlider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContainersBox from "../components/global/ContainersBox";
import InfoProdukDetail from "../containers/global/InfoProdukDetail";
import InfoPenjual from "../containers/global/InfoPenjual";
import ButtonClick from "../components/global/ButtonClick";
import DrawerTawar from "../components/drawer/DrawerTawar";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../redux/product";
import ModalContainer from "../components/global/ModalContainer";
import ContentTawar from "../containers/global/ContentTawar";
import { GetProfile } from "../redux/profile";

const DetailProduk = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:425px)");
  let navigate = useNavigate();

  const { id } = useParams();
  const loading = useSelector((state) => state.product.loading);
  const detail = useSelector((state) => state.product.productsDetail);
  const seller = useSelector((state) => state.product.user.id);
  const profile = useSelector((state) => state.profile.profile.data);
  const buyer = localStorage.getItem("uid", true);
  const owner = seller == buyer;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductItem(id));
    dispatch(GetProfile(seller));
  }, [dispatch, id]);

  return (
    <>
      {isMobile ? (
        <>
          <ImageSlider />
          <Button
            onClick={() => navigate(-1)}
            sx={{
              position: "fixed",
              top: "20px",
              left: "0",
              zIndex: "99",
            }}
          >
            <ArrowBackIcon
              style={{
                fontSize: "30px",
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
              }}
            />
          </Button>

          <Box
            sx={{
              position: "fixed",
              bottom: "20px",
              zIndex: "99",
              width: "90%",
              left: "5%",
            }}
          >
            {owner ? (
              <>
                {detail.data.status == 3 ? (
                  <></>
                ) : (
                  <>
                    <ButtonClick title="Terbitkan" primary />
                    <Link
                      to={`/daftar-jual/update/${id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ButtonClick title="Edit" />
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                {detail.data?.status == 1 && (
                  <>
                    <DrawerTawar setDrawer={setOpenDrawer} data={detail} />
                  </>
                )}
                {detail.data?.status == 2 && (
                  <>
                    <ButtonClick title="Menunggu respons Penjual" disabled />
                  </>
                )}
                {detail.data?.status == 3 && (
                  <>
                    <ButtonClick
                      title="Hubungi Penjual Via WhatsApp"
                      primary
                      onClick={() =>
                        window.open(
                          `https://api.whatsapp.com/send?phone=${profile.number_phone}`
                        )
                      }
                    />
                  </>
                )}
              </>
            )}
          </Box>
          {loading ? (
            <>
              <div>Loading...</div>
            </>
          ) : (
            <Box
              mx={2}
              mb={6}
              sx={{
                position: "relative",
                top: "-30px",
                zIndex: "1",
              }}
            >
              {" "}
              {detail.data && (
                <>
                  <ContainersBox data={<InfoProdukDetail detail={detail} />} />
                  {/* {owner && <ContainersBox data={<InfoPenjual id={buyer} />} />}
            {!owner && <ContainersBox data={<InfoPenjual id={seller} />} />} */}
                  {owner && <ContainersBox data={<InfoPenjual id={buyer} />} />}
                  {!owner && (
                    <ContainersBox data={<InfoPenjual id={seller} />} />
                  )}
                  <ContainersBox
                    data={
                      <>
                        <Typography variant="body1" mb={1}>
                          Deskripsi
                        </Typography>
                        <Typography variant="caption" color="#8A8A8A">
                          {detail.data?.description}
                        </Typography>
                      </>
                    }
                  />{" "}
                </>
              )}
            </Box>
          )}
        </>
      ) : (
        <>
          {openModal && (
            <ModalContainer
              setModal={setOpenModal}
              content={<ContentTawar data={detail} />}
            />
          )}
          <Header />
          <Grid
            data-testid="detail-produk-page"
            container
            spacing={3}
            px={28}
            mt={4}
          >
            {loading ? (
              <>
                <div>Loading...</div>
              </>
            ) : (
              <>
                {detail.data && (
                  <>
                    <Grid item xs={12} md={7}>
                      <Box
                        position={"relative"}
                        width={"100%"}
                        height={"500px"}
                        mb={2}
                        borderRadius="20px"
                      >
                        <ImageSlider />
                      </Box>

                      <ContainersBox
                        data={
                          <>
                            <Typography variant="body1" mb={1}>
                              Deskripsi
                            </Typography>
                            <Typography variant="caption" color="#8A8A8A">
                              {detail.data?.description}
                            </Typography>
                          </>
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <ContainersBox
                        data={
                          <>
                            <InfoProdukDetail detail={detail} />
                            {owner ? (
                              <>
                                {detail.data.status == 3 ? (
                                  <></>
                                ) : (
                                  <>
                                    <ButtonClick title="Terbitkan" primary />
                                    <Link
                                      to={`/daftar-jual/update/${id}`}
                                      style={{ textDecoration: "none" }}
                                    >
                                      <ButtonClick title="Edit" />
                                    </Link>
                                  </>
                                )}
                              </>
                            ) : (
                              <>
                                {detail.data.status == 1 && (
                                  <>
                                    <ButtonClick
                                      title="Saya tertarik dan ingin nego"
                                      primary
                                      onClick={() => setOpenModal(true)}
                                    />
                                  </>
                                )}
                                {detail.data.status == 2 && (
                                  <>
                                    <ButtonClick
                                      title="Menunggu respons Penjual"
                                      disabled
                                    />
                                  </>
                                )}
                                {detail.data.status == 3 && (
                                  <>
                                    <ButtonClick
                                      title="Hubungi Penjual Via WhatsApp"
                                      primary
                                      // link to whatsapp
                                      onClick={() =>
                                        window.open(
                                          `https://api.whatsapp.com/send?phone=${profile.number_phone}`
                                        )
                                      }
                                    />
                                  </>
                                )}
                              </>
                            )}
                          </>
                        }
                      />
                      {owner && (
                        <ContainersBox data={<InfoPenjual id={buyer} />} />
                      )}
                      {!owner && (
                        <ContainersBox data={<InfoPenjual id={seller} />} />
                      )}
                    </Grid>
                  </>
                )}
              </>
            )}
          </Grid>
        </>
      )}
    </>
  );
};

export default DetailProduk;
