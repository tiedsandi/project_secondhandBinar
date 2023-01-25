import { useMediaQuery, Grid } from "@mui/material";
import AddButtonM from "../../components/buttons/AddButtonM";
import AddButton from "../../components/buttons/AddButton";
import CardProdukM from "../mobile/CardProdukM";
import CardProduk from "../web/CardProduk";
import { useSelector } from "react-redux";

const SemuaProduk = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const productsUser = useSelector((state) => state.product.productsUser);
  const productAktif = useSelector((state) => state.product.productAktif);

  return (
    <>
      {isMobile ? (
        <>
          <Grid
            item
            lg={1.8}
            mb={2}
            gap={1}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {productAktif.length < 4 && <AddButtonM />}
            {productsUser.map((product) => (
              <CardProdukM key={product.id} product={product} />
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Grid
            data-testid="semua=produk"
            item
            lg={1.8}
            mb={2}
            gap={3}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {productAktif.length < 4 && <AddButton />}
            {productsUser.map((product) => (
              <CardProduk key={product.id} product={product} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default SemuaProduk;
