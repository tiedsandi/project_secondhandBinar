import { Link, useMediaQuery } from "@mui/material";
import NoData from "./NoData";
import { useSelector } from "react-redux";
import React from "react";
import ProdukDiminati from "../web/ProdukDiminati";
import ProdukDiminatiM from "../mobile/ProdukDiminatiM";
// import { Link } from "react-router-dom";

const Diminati = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const diminati = useSelector((state) => state.transaction.diminati);
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
              {diminati.length === 0 ? (
                <NoData />
              ) : (
                <>
                  {diminati.map((productrans) => (
                    <React.Fragment key={productrans.id}>
                      <Link
                        href={`penawaran/${productrans.id}`}
                        sx={{ textDecoration: "none" }}
                      >
                        <ProdukDiminatiM productrans={productrans} />
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
            <>
              <div>Loading...</div>
            </>
          ) : (
            <>
              {diminati.length === 0 ? (
                <NoData />
              ) : (
                <>
                  {diminati.map((productrans) => (
                    <React.Fragment key={productrans.id}>
                      <Link
                        href={`penawaran/${productrans.id}`}
                        sx={{ textDecoration: "none" }}
                      >
                        <ProdukDiminati productrans={productrans} />
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

export default Diminati;
