import React from "react";
import { Box, Typography } from "@mui/material";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import DropzonePic from "../global/DropzonePic";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateProduct } from "../../redux/product";

const AddProdukField = () => {
  const kategori = useSelector((state) => state.category.categorys);

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [pictures, setPictures] = React.useState([]);
  const loadingButton = useSelector((state) => state.product.loadingButton);
  // console.log(loadingButton);

  const dispatch = useDispatch();
  const handleAddProduk = () => {
    const data = {
      product: name,
      price,
      category_id: kategori.find((item) => item.category === category).id,
      description,
      status: 1,
      pictures: pictures.map((item) => item.preview),
    };
    dispatch(fetchCreateProduct(data));
    // console.log(data);
  };

  return (
    <Box data-testid="add-produk-field" display="flex" flexDirection="column">
      <FormInput
        label="Nama Produk"
        type="text"
        placeholder="Contoh: Baju Batik"
        value={name}
        setValue={setName}
      />
      <FormInput
        label="Harga"
        type="text"
        placeholder="Rp 0,00"
        value={price}
        setValue={setPrice}
      />
      <FormInput
        label="Kategori"
        type="select"
        placeholder="Pilih Kategori"
        select={kategori}
        value={category}
        data={"kategori"}
        setValue={setCategory}
      />
      <FormInput
        label="Deskripsi"
        type="textarea"
        placeholder="Contoh: Jalan Ikan Hiu 33"
        value={description}
        setValue={setDescription}
      />
      {/* Foto Produk */}
      <Typography fontSize={12} mb={1} mr={50}>
        Foto Produk
      </Typography>
      {/* From global component */}
      <DropzonePic myFiles={pictures} setMyFiles={setPictures} />

      {/* Button */}
      <Box display={"flex"} justifyContent={"center"}>
        {/* Preview */}
        <Box width={"100%"} mr={1}>
          <ButtonClick title="Preview" />
        </Box>
        {/* Terbitkan */}
        <Box width={"100%"}>
          {loadingButton ? (
            <ButtonClick title="Terbitkan" disabled />
          ) : (
            <ButtonClick title="Terbitkan" primary onClick={handleAddProduk} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AddProdukField;
