import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apisecondhand from './apis/apisecondhand';

export const GetProfile = createAsyncThunk(
    'profile/GetProfile',
    async (data) => {
        if (data !== undefined && data !== null) {
            const res = await apisecondhand.get('/biodata/' + data, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            return res.data;
        }
    }
);

export const UpdateProfile = createAsyncThunk(
    'profile/UpdateProfile',
    async ({ uid, data }) => {
        const res = await apisecondhand.put('/biodata/' + uid, data, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        return res.data;
    }
);

export const UploadImageProfile = createAsyncThunk(
    'profile/UploadImageProfile',
    async (data) => {
        const res = await apisecondhand.post('/biodata/upload-profile-pic', data, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        return res.data;
    }
);


const initialState = {
    profile: {},
    loading: false,
    error: null,
    pathImg: '',
    message: '',
    profileData: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: {
        [GetProfile.pending]: (state) => {
            return { ...state, loading: true }
        },
        [GetProfile.fulfilled]: (state, action) => {
            if (action.payload !== undefined && action.payload !== null) {
                state.profileData = state.profile_data = action.payload.data.address === null ? false : true;
                state.profile = action.payload;
                state.loading = false;
            }
        },
        [GetProfile.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
        [UpdateProfile.pending]: (state) => {
            return { ...state, loading: true }
        },
        [UpdateProfile.fulfilled]: (state) => {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            return { ...state, loading: false, message: 'Update Success' }
        },
        [UpdateProfile.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
        [UploadImageProfile.pending]: (state) => {
            return { ...state, loading: true }
        },
        [UploadImageProfile.fulfilled]: (state, action) => {
            return { ...state, loading: false, pathImg: action.payload.message.path }
        },
        [UploadImageProfile.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
    }
});

export const { setLoading } = profileSlice.actions;
export default profileSlice.reducer;
