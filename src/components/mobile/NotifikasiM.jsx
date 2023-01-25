import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { GetNotification, MarkAsRead } from "../../redux/notifikasi";
import { Markup } from "react-render-markup";

const NotifikasiM = ({ setOpen, message }) => {
  const notif = useSelector((state) => state.notifikasi.notifikasi);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetNotification());
  }, [dispatch, notif]);

  const handleMarkAsRead = (id) => {
    dispatch(MarkAsRead(id));
  };
  return (
    <Box
      data-testid="notifikasi-mobile"
      bgcolor={"white"}
      position={"fixed"}
      width={"100%"}
      height={"100%"}
      top="0"
      left={"0"}
      zIndex="100"
    >
      <Box display={"flex"} m={2} alignItems="center">
        <CloseIcon onClick={() => setOpen(false)} sx={{ fontSize: "1.5rem" }} />
        <Typography variant="h6" fontSize={"1.2rem"} ml={2}>
          {" "}
          Notifikasi{" "}
        </Typography>
      </Box>
      {notif.length === 0 ? (
        <Box display={"flex"} ml={2}>
          <Typography variant="h6" fontSize={"1.2rem"} color={"grey"}>
            Tidak ada notifikasi
          </Typography>
        </Box>
      ) : (
        <Box>
          {notif.map((item) => (
            <React.Fragment key={item.id}>
              <Box
                display={"flex"}
                p={2}
                borderBottom="1px solid #E5E5E5"
                onClick={() => handleMarkAsRead(item.id)}
                sx={{
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
                    <Box display={"flex"} justifyContent="space-between">
                      <Typography
                        variant="caption"
                        fontSize={".6rem"}
                        color={"GrayText"}
                        mb={1}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color={"GrayText"}
                        mb={1}
                        fontSize={".5rem"}
                      >
                        {item.createdAt.slice(0, 10)}{" "}
                        {item.createdAt.slice(12, 16)}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      fontSize={".7rem"}
                      lineHeight={1.5}
                    >
                      <Markup markup={item.message} />
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NotifikasiM;
