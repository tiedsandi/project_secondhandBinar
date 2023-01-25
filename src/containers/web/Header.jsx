import React from "react";
import { Box, Link, Button } from "@mui/material";
import SearchField from "../../components/web/SearchField";
import ListIcon from "@mui/icons-material/List";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationImportantTwoToneIcon from "@mui/icons-material/NotificationImportantTwoTone";
import LoginIcon from "@mui/icons-material/Login";
import ModalNotifikasi from "../../components/modals/ModalNotifikasi";
import MenuProfile from "../../components/global/MenuProfile";

import { useDispatch, useSelector } from "react-redux";
import { GetNotification } from "../../redux/notifikasi";

const Header = ({ active, title }) => {
  const islogin = localStorage.getItem("token");
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const notif = useSelector((state) => state.notifikasi.notifikasi);
  const dataProfile = useSelector((state) => state.profile.profile_data);
  const uid = localStorage.getItem("uid", true);
  const notifikasiButton = () => {
    isNotificationOpen
      ? setIsNotificationOpen(false)
      : setIsNotificationOpen(true);
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetNotification());
  }, [dispatch, notif]);

  return (
    <>
      {isNotificationOpen && (
        <ModalNotifikasi message={notif.length > 0 ? true : false} />
      )}
      {!title && (
        <Box
          data-testid="header-web"
          component="header"
          display="flex"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.15)"
          justifyContent="space-between"
          alignItems="center"
          height="80px"
          padding="0px 8rem"
        >
          <Box display="flex" alignItems="center" width="44rem">
            <Box mr={2}>
              <a href="/">
                {/* <Box mr={2}> */}
                <img src="/images/Logo.png" alt="logo" />
                {/* </Box> */}
                {/* <Box component="img" src="images/logo.png" alt="logo" mr={2} /> */}
              </a>
            </Box>
            <SearchField />
          </Box>
          {islogin ? (
            <Box
              width={"6rem"}
              display="flex"
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Link
                href={dataProfile ? "/daftar-jual" : `/profile/${uid}`}
                color={"inherit"}
              >
                <ListIcon color={active ? "primary" : "textPrimary"} />
              </Link>
              {notif.length > 0 ? (
                <Box
                  component={"button"}
                  onClick={notifikasiButton}
                  sx={{
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <NotificationImportantTwoToneIcon color={"primary"} />
                </Box>
              ) : (
                <Box
                  component={"button"}
                  onClick={notifikasiButton}
                  sx={{
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <NotificationsIcon color={"textPrimary"} />
                </Box>
              )}
              <MenuProfile />
            </Box>
          ) : (
            <Button
              variant="contained"
              href={"/login"}
              sx={{
                backgroundColor: "#7126B5",
                textTransform: "none",
                padding: "14px 16px",
                height: "48px",
                borderRadius: "12px",
              }}
            >
              <LoginIcon /> Masuk
            </Button>
          )}
        </Box>
      )}
      {title && (
        <Box
          data-testid="title-header-web"
          component="header"
          display="flex"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.15)"
          alignItems="center"
          height="80px"
          padding="0px 8rem"
        >
          <Box display="flex" alignItems="center" width="44rem">
            <Box mr={2}>
              <a href="/">
                {/* <Box mr={2}> */}
                <img src="/images/Logo.png" alt="logo" />
                {/* </Box> */}
                {/* <Box component="img" src="images/logo.png" alt="logo" mr={2} /> */}
              </a>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            {title}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
