import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonClick from "../components/global/ButtonClick";

const NotFound = () => {
  return (
    <Box
      data-testid="not-found-page"
      display="flex"
      flexDirection={"column"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        width: "200px",
        height: "100vh",
      }}
    >
      <Typography variant="h3">Oh No!</Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <ButtonClick
        title={"Back to Home"}
        primary={true}
        onClick={() => (window.location.href = "/")}
      />
    </Box>
  );
};

export default NotFound;
