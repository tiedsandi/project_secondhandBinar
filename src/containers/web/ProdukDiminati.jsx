import React from "react";
import { Typography, Box } from "@mui/material";

const ProdukDiminati = ({ productrans, status }) => {
  return (
    <Box
      data-testid="produk-diminati-web"
      key={productrans.id}
      p={1}
      sx={{
        width: "345px",
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
      <Box key={productrans.id}>
        <Box
          component={"img"}
          src={productrans.product.product_pictures[0].picture}
          image
          width={"100%"}
          height={"10rem"}
          borderRadius={2}
          sx={{ objectFit: "cover" }}
        />
        <Box position="relative">
          <Typography variant="subtitle1" mb={1}>
            {productrans.product.product}
          </Typography>
          <Typography variant="subtitle2" mb={1}>
            Rp. {productrans.product.price.toLocaleString("id-ID")}
          </Typography>
          <Typography variant="subtitle2" mb={1}>
            Menawar Rp. {productrans.bid_price.toLocaleString("id-ID")}
          </Typography>
          {status && (
            <>
              {productrans.bid_status === 0 && (
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  bgcolor="#D3D3D3"
                  borderRadius={"10px"}
                  p={0.4}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "white", fontSize: "0.8rem" }}
                  >
                    Menunggu
                  </Typography>
                </Box>
              )}
              {productrans.bid_status === 2 && (
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  bgcolor="#D81159"
                  borderRadius={"10px"}
                  p={0.4}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "white", fontSize: "0.8rem" }}
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
                      borderRadius={"10px"}
                      p={0.4}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "white", fontSize: "0.8rem" }}
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
                          borderRadius={"10px"}
                          p={0.4}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{ color: "white", fontSize: "0.8rem" }}
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
                          borderRadius={"10px"}
                          p={0.4}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{ color: "white", fontSize: "0.8rem" }}
                          >
                            Diterima
                          </Typography>
                        </Box>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProdukDiminati;
