import React from "react";
import { Typography, Box } from "@mui/material";

const ProdukDiminatiM = ({ productrans, status }) => {
  return (
    <Box
      data-testid="produk-diminati-mobile"
      key={productrans.id}
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
          src={productrans.product.product_pictures[0].picture}
          image
          width={"100%"}
          height={"5rem"}
          borderRadius={2}
          sx={{ objectFit: "cover" }}
        />
        <Box position={"relative"}>
          <Typography variant="subtitle1" fontSize={".70rem"} mb={1} noWrap>
            {productrans.product.product}
          </Typography>
          <Typography variant="subtitle1" fontSize={".65rem"} mb={1}>
            Rp. {productrans.product.price.toLocaleString("id-ID")}
          </Typography>
          <Typography variant="subtitle2" fontSize={".65rem"}>
            Menawar Rp. {productrans.bid_price.toLocaleString("id-ID")}
          </Typography>
          {status && (
            <>
              {productrans.bid_status === 0 && (
                <Box
                  position={"absolute"}
                  top={0}
                  right={0}
                  bgcolor="#D3D3D3"
                  width={"58px"}
                  borderRadius={"10px"}
                  p={0.2}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "white",
                      fontSize: "0.7rem",
                      textAlign: "center",
                    }}
                  >
                    Menunggu
                  </Typography>
                </Box>
              )}
              {productrans.bid_status === 2 && (
                <Box
                  position={"absolute"}
                  top={0}
                  right={0}
                  width={"58px"}
                  bgcolor="#D81159"
                  borderRadius={"10px"}
                  p={0.2}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "white",
                      fontSize: "0.7rem",
                      textAlign: "center",
                    }}
                  >
                    Ditolak
                  </Typography>
                </Box>
              )}
              {productrans.bid_status === 1 && (
                <>
                  {productrans.transaction_status === 1 ? (
                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      bgcolor="#4C956C"
                      width={"58px"}
                      borderRadius={"10px"}
                      p={0.2}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "white",
                          fontSize: "0.7rem",
                          textAlign: "center",
                        }}
                      >
                        Selesai
                      </Typography>
                    </Box>
                  ) : (
                    <>
                      {productrans.transaction_status === 2 ? (
                        <Box
                          position="absolute"
                          top={0}
                          right={0}
                          bgcolor="#D81159"
                          width={"58px"}
                          borderRadius={"10px"}
                          p={0.2}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "white",
                              fontSize: "0.7rem",
                              textAlign: "center",
                            }}
                          >
                            Batal
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          position="absolute"
                          top={0}
                          right={0}
                          bgcolor="#4C956C"
                          width={"58px"}
                          borderRadius={"10px"}
                          p={0.2}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "white",
                              fontSize: "0.7rem",
                              textAlign: "center",
                            }}
                          >
                            Diterima
                          </Typography>
                        </Box>
                      )}
                    </>
                  )}
                </>
              )}
              {/* {productrans.bid_status === 1 && (
                <Box
                  position={"absolute"}
                  top={0}
                  right={0}
                  width={"58px"}
                  bgcolor="#4C956C"
                  borderRadius={"10px"}
                  p={0.2}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "white",
                      fontSize: "0.7rem",
                      textAlign: "center",
                    }}
                  >
                    Diterima
                  </Typography>
                </Box>
              )} */}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProdukDiminatiM;
