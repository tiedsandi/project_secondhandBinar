import { useMediaQuery } from "@mui/material";
import NoData from "./NoData";
import { useSelector } from "react-redux";
import ProdukDiminati from "../web/ProdukDiminati";
import ProdukDiminatiM from "../mobile/ProdukDiminatiM";
import React from "react";
import { Link } from "react-router-dom";

const Pembelian = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const pembelian = useSelector((state) => state.transaction.pembelian);
  const loading = useSelector((state) => state.transaction.loading);

  return (
    <>
      {isMobile ? (
        <>
          {loading ? (
            <>
              <div>Loading...</div>
            </>
          ) : (
            <>
              {pembelian.length === 0 ? (
                <NoData />
              ) : (
                <>
                  {pembelian.map((productrans) => (
                    <React.Fragment key={productrans.id}>
                      <Link
                        to={`${productrans.product_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ProdukDiminatiM productrans={productrans} status />
                      </Link>
                    </React.Fragment>
                  ))}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {pembelian.length === 0 ? (
                <NoData />
              ) : (
                <>
                  {pembelian.map((productrans) => (
                    <React.Fragment key={productrans.id}>
                      <Link
                        to={`${productrans.product_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ProdukDiminati productrans={productrans} status />
                      </Link>
                    </React.Fragment>
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Pembelian;
