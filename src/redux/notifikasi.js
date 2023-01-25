import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apisecondhand from "./apis/apisecondhand";

export const GetNotification = createAsyncThunk(
    'notifikasi/GetNotification',
    async () => {
        const response = await apisecondhand.get("/notification?order=createdAt%3ADESC", {
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        });
        return response.data;
    }
);

export const MarkAsRead = createAsyncThunk(
    'notifikasi/MarkAsRead',
    async (id) => {
        const response = await apisecondhand.get(`/notification/mark_as_read/${id}`, {
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        });
        return response.data;
    }
);

const initialState = {
    notifikasi: [],
    loading: false,
    error: null,
};

const notifikasiSlice = createSlice({
    name: 'notifikasi',
    initialState,
    extraReducers: {
        [GetNotification.pending]: (state) => {
            return { ...state, loading: true, error: null };
        },
        [GetNotification.fulfilled]: (state, action) => {
            const notif = action.payload.data
            const uid = localStorage.getItem("uid")
            state.notifikasi = notif.filter(item => item.user_id == uid && item.read === 0)
            state.loading = false;
        },
        [GetNotification.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error };
        },
        [MarkAsRead.pending]: (state) => {
            return { ...state, loading: true, error: null };
        },
        [MarkAsRead.fulfilled]: (state, action) => {
            return { ...state, loading: false, error: null };
        },
        [MarkAsRead.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error };
        }
    }
});

export const { notifikasi } = notifikasiSlice.actions;
export default notifikasiSlice.reducer;