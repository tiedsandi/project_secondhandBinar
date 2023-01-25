import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/search";

const SearchFieldM = () => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  }

  return (
    <Box
      data-testid="search-field"
      display="flex"
      alignItems="center"
      width={"90rem"}
    >
      <TextField
        id="search"
        placeholder="Cari di sini ..."
        fullWidth
        value={search}
        onChange={handleChange}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
          style: {
            color: "#000",
            fontSize: "1rem",
            padding: ".5rem 1rem",
            borderRadius: "16px",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchFieldM;
