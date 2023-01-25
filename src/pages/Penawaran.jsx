import React from "react";
import { useMediaQuery } from "@mui/material";
import InfoPenawaran from "../components/web/InfoPenawaran";
import Header from "../containers/web/Header";
import HeaderM from "../containers/mobile/HeaderM";
import InfoPenawaranM from "../components/global/InfoPenawaranM";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactionById } from "../redux/transaction";
import { useParams } from "react-router-dom";
import { GetProfile } from "../redux/profile";

const Penawaran = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const dispatch = useDispatch();
  const id = useParams().id;
  const loading = useSelector((state) => state.transaction.loading);
  const transaction = useSelector((state) => state.transaction.transaction);
  const uid = localStorage.getItem("uid", true);

  React.useEffect(() => {
    dispatch(fetchTransactionById(id));
    dispatch(GetProfile(uid));
  }, [dispatch, id]);
  return (
    <>
      {isMobile ? (
        <>
          <HeaderM title={"Info Penawaran"} />

          {loading ? (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              Loading...
            </div>
          ) : (
            <>
              {transaction && (
                <InfoPenawaranM transaction={transaction} id={id} />
              )}
            </>
          )}
        </>
      ) : (
        <>
          <Header title={"Info Penawaran"} />
          {loading ? (
            <div
              data-testid="penawaran-page"
              style={{ textAlign: "center", marginTop: "50px" }}
            >
              Loading...
            </div>
          ) : (
            <>
              {transaction.data && (
                <InfoPenawaran transaction={transaction.data} id={id} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Penawaran;
