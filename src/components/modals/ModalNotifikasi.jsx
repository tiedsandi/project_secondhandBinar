import { Box, Typography } from "@mui/material";
import React from "react";
import ContainersBox from "../global/ContainersBox";
import { useSelector, useDispatch } from "react-redux";
import { Markup } from "react-render-markup";
import { MarkAsRead } from "../../redux/notifikasi";

const ModalNotifikasi = ({ message }) => {
  const notif = useSelector((state) => state.notifikasi.notifikasi);
  const dispatch = useDispatch();

  const handleMarkAsRead = (id) => {
    dispatch(MarkAsRead(id));
  };
  return (
    <Box
      data-testid="modal-notifikasi"
      position={"absolute"}
      zIndex="100"
      top="3.5rem"
      right="9.5rem"
    >
      {message && (
        <ContainersBox
          shadow
          data={
            <>
              {notif.map((item) => (
                <Box
                  display={"flex"}
                  key={item.id}
                  mt={2}
                  borderBottom="1px solid #E5E5E5"
                  onClick={() => handleMarkAsRead(item.id)}
                  sx={{
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "#F5F5F5",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.image}
                    sx={{
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "8px",
                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                      marginRight: "2rem",
                      objectFit: "cover",
                    }}
                  />
                  <Box width={"100%"}>
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent="space-between"
                        width={"300px"}
                      >
                        <Typography
                          variant="caption"
                          color={"GrayText"}
                          mb={1}
                          fontSize={".7rem"}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color={"GrayText"}
                          mb={1}
                          fontSize={".7rem"}
                        >
                          {item.createdAt.slice(0, 10)}{" "}
                          {item.createdAt.slice(12, 16)}
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        mb={1}
                        fontSize={".7rem"}
                        lineHeight={1.5}
                      >
                        <Markup markup={item.message} />
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </>
          }
        />
      )}
      {!message && (
        <ContainersBox
          shadow
          data={
            <Box width={"300px"}>
              <Typography
                variant="caption"
                color={"GrayText"}
                mb={1}
                fontSize={".7rem"}
              >
                Tidak ada notifikasi
              </Typography>
            </Box>
          }
        />
      )}
    </Box>
  );
};

export default ModalNotifikasi;
