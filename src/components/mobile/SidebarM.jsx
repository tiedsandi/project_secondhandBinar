import React from "react";
import { Box, Stack, Typography, Link, Button, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import NotifikasiM from "./NotifikasiM";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../redux/profile";

const SidebarM = ({ setOpen }) => {
  const islogin = localStorage.getItem("token");
  const [open, setOpenState] = React.useState(false);

  const uid = localStorage.getItem("uid");
  const handlelogout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const profileData = useSelector((state) => state.profile.profile.data);
  const dataProfile = useSelector((state) => state.profile.profile_data);
  const profileLoading = useSelector((state) => state.profile.profile.loading);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetProfile(uid));
  }, [dispatch, uid]);

  return (
    <Stack
      data-testid="sidebar-mobile"
      position={"fixed"}
      top={0}
      left={0}
      width={"50%"}
      height={"100vh"}
      bgcolor="#f5f5f5"
      zIndex={1}
      p={2}
      spacing={1}
    >
      {open && (
        <>
          <NotifikasiM setOpen={setOpenState} />
        </>
      )}

      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
        mb={1}
      >
        <Typography
          variant="h6"
          fontSize={"1rem"}
          component={Link}
          href={"/"}
          sx={{ textDecoration: "none", color: "black" }}
        >
          Second Hand
        </Typography>
        <CloseIcon onClick={() => setOpen(false)} sx={{ fontSize: "1.5rem" }} />
      </Box>
      {islogin && (
        <>
          {profileLoading ? (
            <>
              <div>Loading...</div>
            </>
          ) : (
            <>
              {profileData && (
                <>
                  <Typography variant="caption" fontWeight={"bold"} mb={2}>
                    {profileData.fullname}
                  </Typography>
                  <Divider />
                  <Typography
                    variant="subtitle1"
                    fontSize={"0.8rem"}
                    sx={{ textDecoration: "none", color: "black" }}
                    component={Box}
                    onClick={() => setOpenState(!open)}
                  >
                    Notifikasi
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={"0.8rem"}
                    component={Link}
                    href={dataProfile ? "/daftar-jual" : `/profile/${uid}`}
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    Daftar Jual
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={"0.8rem"}
                    component={Link}
                    href={`/profile/${uid}`}
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    Akun Saya
                  </Typography>
                  <Divider />
                </>
              )}
            </>
          )}

          <Button variant="contained" onClick={handlelogout}>
            Keluar
          </Button>
        </>
      )}
      {!islogin && (
        <Button
          variant="contained"
          href={"/login"}
          sx={{
            backgroundColor: "#7126B5",
            textTransform: "none",
            width: "100px",
            height: "40px",
            borderRadius: "12px",
            spacing: 4,
          }}
        >
          <LoginIcon /> Masuk
        </Button>
      )}
    </Stack>
  );
};

export default SidebarM;
