import React from "react";
import { Box, Typography } from "@mui/material";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import DropzonePic from "../global/DropzonePic";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateProduct, fetchUpdateProduct } from "../../redux/product";

const UpdateProdukField = () => {
  const kategori = useSelector((state) => state.category.categorys);
  const detail = useSelector((state) => state.product.productsDetail.data);
  // console.log(detail);

  const [name, setName] = React.useState(detail.product);
  const [price, setPrice] = React.useState(detail.price);
  const [description, setDescription] = React.useState(detail.description);
  const [category, setCategory] = React.useState(detail.category.category);
  const [pictures, setPictures] = React.useState(detail.product_pictures);
  const loadingButton = useSelector((state) => state.product.loadingButton);

  const dispatch = useDispatch();
  const handleAddProduk = () => {
    const data = {
      product: name,
      price,
      category_id: kategori.find((item) => item.category === category).id,
      description,
      status: 1,
      pictures: pictures.map((item) => item.preview || item.picture),
    };
    // console.log('update', data);
    dispatch(fetchUpdateProduct({ id: detail.id, data }));
  };

  return (
    <Box
      data-testid="update-produk-field"
      display="flex"
      flexDirection="column"
    >
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

export default UpdateProdukField;
