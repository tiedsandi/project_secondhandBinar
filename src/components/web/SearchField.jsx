import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/search";

const SearchField = () => {
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
      mr={2}
      width={"80rem"}
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
            borderRadius: "20px",
            backgroundColor: "#f5f5f5",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchField;
