import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const UserProduk = ({ profileData }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box data-testid="user-produk" display="flex" alignItems="center">
      <Box
        component={"img"}
        src={profileData.profile_picture}
        width={isMobile ? "3rem" : "4rem"}
        height={isMobile ? "3rem" : "4rem"}
        borderRadius={isMobile ? "10px" : "20px"}
      />
      <Box display="flex" flexDirection="column" ml={2}>
        <Typography variant="subtitle1" fontSize={isMobile ? "1rem" : "1.4rem"}>
          {profileData.fullname}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          fontSize={isMobile ? "0.8rem" : "1rem"}
        >
          {profileData.city.city}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProduk;
