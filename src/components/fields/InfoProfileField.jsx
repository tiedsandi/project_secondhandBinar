import React from "react";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import ImgDropProfile from "../buttons/ImgDropProfile";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "../../redux/profile";
import AlertMessage from "../global/AlertMessage";

const InfoProfileField = ({ kota }) => {
    const uid = localStorage.getItem("uid");
    const profile = useSelector((state) => state.profile.profile.data);
    const path = useSelector((state) => state.profile.pathImg);
    const message = useSelector((state) => state.profile.message);

    const [fullname, setfullname] = React.useState(profile.fullname || "");
    const [city_id, setcity_id] = React.useState(profile.city_id || "");
    const [number_phone, setnumber_phone] = React.useState(profile.number_phone || "");
    const [address, setAddress] = React.useState(profile.address || "");
    const [profile_picture, setProfilePicture] = React.useState(profile.profile_picture || "");

    // find city name from city id in kota
    const cityName = kota.find((item) => item.id === city_id);

    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = {
            fullname,
            profile_picture: path ? path : profile_picture,
            city_id: city_id,
            address,
            number_phone,
        }
        // console.log(data);
        dispatch(UpdateProfile({ uid, data }))
    }

    return (
        <>
            {message && <AlertMessage pesan={message} />}
            <ImgDropProfile data={profile} setData={setProfilePicture} />
            <FormInput label="Nama" value={fullname} setValue={setfullname} placeholder='Nama' type={'text'} />

            <FormInput label="Kota" value={cityName ? cityName.city : city_id} setValue={setcity_id} placeholder='Pilih Kota' type={'select'} select={kota} />

            <FormInput label="Alamat" value={address} setValue={setAddress} placeholder='Contoh: Jalan Ikan Hiu 33' type={'textarea'} />

            <FormInput label="No. HP" value={number_phone} setValue={setnumber_phone} placeholder='contoh: +628123456789' type={'text'} />

            <ButtonClick title="Simpan" onClick={handleUpdate} primary />
        </>
    )
}

export default InfoProfileField

    // const dataKota = [...new Set(kota.map((item) => item.city))];
    // console.log(dataKota);
    // console.log(kota);

    // const [fullname, setfullname] = React.useState("");
    // const [city_id, setcity_id] = React.useState("");
    // const [number_phone, setnumber_phone] = React.useState("");
    // const [address, setAddress] = React.useState("");
    // const [profile_picture, setProfilePicture] = React.useState("");