import { Box, Typography } from "@mui/material";
import React from "react";
import DrawerProductMatch from "../drawer/DrawerProductMatch";
import DrawerStatus from "../drawer/DrawerStatus";
import { useDispatch } from "react-redux";
import { TransactionStatus } from "../../redux/transaction";
import InfoPenjual from "../../containers/global/InfoPenjual";
import ContainersBox from "../global/ContainersBox";

const InfoPenawaranM = ({ transaction, id }) => {
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
    <Box data-testid="info-penawaran-global">
      <Box display="flex" justifyContent="center" mx={2}>
        <ContainersBox data={<InfoPenjual id={transaction.data?.buyer.id} />} />
      </Box>
      <Box>
        <Typography px={2} fontWeight={500} fontSize={16}>
          Daftar Produkmu yang Ditawar
        </Typography>
        <Box p={2} borderBottom="1px solid #E5E5E5">
          <Box display={"flex"} mt={0} alignItems="center">
            <Box
              component={"img"}
              src={transaction.data?.product.product_pictures[0].picture}
              borderRadius={"10px"}
              width={"3.2rem"}
              height={"3.2rem"}
              sx={{ objectFit: "cover" }}
            />
            <Box ml={2} p={1}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="subtitle1"
                  fontSize={10}
                  color={"GrayText"}
                  lineHeight={2}
                >
                  Penawaran produk
                </Typography>
                <Typography
                  ml={"3rem"}
                  variant="subtitle1"
                  fontSize={".5rem"}
                  color={"GrayText"}
                  lineHeight={2}
                >
                  {transaction.data?.updatedAt.slice(0, 10)}{" "}
                  {transaction.data?.updatedAt.slice(12, 16)}
                </Typography>
              </Box>
              <Typography variant="subtitle1" fontSize={12} lineHeight={"20px"}>
                {transaction.data?.product.product}
              </Typography>
              <Typography variant="subtitle1" fontSize={12} lineHeight={"20px"}>
                Rp. {transaction.data?.product.price.toLocaleString("id-ID")}
              </Typography>
              <Typography variant="subtitle1" fontSize={12} lineHeight={"20px"}>
                Ditawar Rp.{" "}
                {transaction.data?.bid_price.toLocaleString("id-ID")}
              </Typography>
            </Box>
          </Box>

          {transaction.data?.bid_status === 1 ? (
            <DrawerStatus settransaction_status={settransaction_status} />
          ) : (
            <DrawerProductMatch />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default InfoPenawaranM;
