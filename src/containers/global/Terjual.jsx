import { useMediaQuery } from "@mui/material";
import React from "react";
import CardProduk from "../web/CardProduk";
import NoData from "./NoData";
import { useSelector } from "react-redux";
import CardProdukM from "../mobile/CardProdukM";

const Terjual = () => {
  const terjual = useSelector((state) => state.product.terjual);
  const isMobile = useMediaQuery("(max-width:425px)");
  return (
    <>
      {isMobile ? (
        <>
          {terjual.length === 0 ? (
            <NoData />
          ) : (
            <>
              {terjual.map((productrans) => (
                <React.Fragment key={productrans.id}>
                  <CardProdukM product={productrans} />
                </React.Fragment>
              ))}
            </>
          )}
        </>
      ) : (
        <>
          {terjual.length === 0 ? (
            <NoData />
          ) : (
            <>
              {terjual.map((productrans) => (
                <React.Fragment key={productrans.id}>
                  <CardProduk product={productrans} />
                </React.Fragment>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Terjual;
