import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../redux/profile";
import UserProduk from "./UserProduk";

const InfoPenjual = ({ id }) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profile.data);
  const profileLoading = useSelector((state) => state.profile.profile.loading);

  React.useEffect(() => {
    dispatch(GetProfile(id));
  }, [dispatch, id]);

  return (
    <>
      {profileLoading ? (
        <>
          <div data-testid="info-penjual">Loading...</div>
        </>
      ) : (
        <>{profileData && <UserProduk profileData={profileData} />}</>
      )}
    </>
  );
};

export default InfoPenjual;
