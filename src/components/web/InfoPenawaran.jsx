import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContainersBox from "../global/ContainersBox";
import InfoPenjual from "../../containers/global/InfoPenjual";

import ModalproductMatch from "../modals/ModalproductMatch";
import ModalStatus from "../modals/ModalStatus";

import { useDispatch } from "react-redux";
import { TransactionStatus } from "../../redux/transaction";

const InfoPenawaran = ({ transaction, id }) => {
  let navigate = useNavigate();
  const [transaction_status, settransaction_status] = React.useState();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (transaction_status) {
      dispatch(TransactionStatus({ id, data: { transaction_status } })).then(
        () => {
          window.location.href = "/daftar-jual";
        }
      );
    }
  }, [transaction_status]);

  return (
    <>
      <Box
        data-testid="info-penawaran-web"
        display="flex"
        flexDirection={"column"}
        width={"60rem"}
        sx={{
          margin: "0 auto",
          position: "relative",
          marginTop: "2rem",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Button
            onClick={() => navigate(-1)}
            sx={{
              position: "fixed",
              left: "8rem",
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

          <ContainersBox data={<InfoPenjual id={transaction?.buyer.id} />} />
        </Box>

        <Typography variant="h6" mb={1}>
          Daftar Produkmu yang Ditawar{" "}
        </Typography>
        <Box display={"flex"} mt={2} borderBottom="1px solid #E5E5E5">
          <Box
            component={"img"}
            src={transaction.product.product_pictures[0].picture}
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              marginRight: "2rem",
            }}
          />
          <Box width={"100%"}>
            <Box>
              <Box display={"flex"} justifyContent="space-between">
                <Typography variant="caption" color={"GrayText"} mb={1}>
                  Penawaran produk
                </Typography>
                <Typography variant="caption" color={"GrayText"} mb={1}>
                  {transaction.updatedAt.slice(0, 10)}{" "}
                  {transaction.updatedAt.slice(12, 16)}{" "}
                </Typography>
              </Box>
              <Typography variant="subtitle1" mb={1}>
                {transaction.product.product}
              </Typography>
              <Typography variant="subtitle2" mb={1}>
                Rp. {transaction.product.price.toLocaleString("id-ID")}
              </Typography>
              <Typography variant="subtitle1" mb={1}>
                Ditawar Rp {transaction.bid_price.toLocaleString("id-ID")}
              </Typography>
            </Box>
            {transaction.bid_status === 1 ? (
              <ModalStatus settransaction_status={settransaction_status} />
            ) : (
              <ModalproductMatch transaction={transaction} />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InfoPenawaran;
