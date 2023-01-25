import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonCategory from "../../components/buttons/ButtonCategory";
import { useSelector } from "react-redux";

const SetKategori = ({ kategory, setKategory }) => {
  const isMobile = useMediaQuery("(max-width:420px)");
  const category = useSelector((state) => state.category.categorys);

  return (
    <Box
      data-testid="kategori"
      keys={category.id}
      sx={{
        display: "flex",
        overflow: isMobile ? "scroll" : "none",
        gap: 1.5,
        paddingX: isMobile ? "1rem" : "0",
      }}
    >
      <ButtonCategory
        title={"Semua"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />
      {category &&
        category.map((category) => (
          <ButtonCategory
            key={category.id}
            title={category.category}
            icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
            value={kategory}
            setValue={setKategory}
          />
        ))}

      {/* <ButtonCategory
        title={"Semua"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Hobi"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Kendaraan"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Baju"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Elektronik"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Kesehatan"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      /> */}
    </Box>
  );
};

export default SetKategori;
