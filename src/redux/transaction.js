import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apisecondhand from "./apis/apisecondhand";

export const fetchTransaction = createAsyncThunk(
  "transaction/fetchTransaction",
  async () => {
    const response = await apisecondhand.get("/transaction", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);


export const fetchTransactionById = createAsyncThunk(
  "transaction/fetchTransactionById",
  async (id) => {
    const response = await apisecondhand.get(`/transaction/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const BuyerBid = createAsyncThunk(
  "transaction/BuyerBid",
  async (data) => {
    const response = await apisecondhand.post("/transaction/buyer/bid", data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const BidStatus = createAsyncThunk(
  "transaction/BidStatus",
  async ({ id_transaction, data }) => {
    const response = await apisecondhand.put("/transaction/seller/change_status/bid/" + id_transaction, data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const TransactionStatus = createAsyncThunk(
  "transaction/TransactionStatus",
  async ({ id, data }) => {
    const response = await apisecondhand.put("/transaction/seller/change_status/" + id, data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

const initialState = {
  transactions: [],
  transaction: {},
  buyerbid: {},
  diminati: [],
  pembelian: [],
  terjual: [],
  loading: false,
  error: null,
  message: "",
};

const TransactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchTransaction.pending]: (state) => {
      return { ...state, loading: true, error: null };
    },
    [fetchTransaction.fulfilled]: (state, action) => {
      const uid = localStorage.getItem("uid");
      state.transactions = action.payload.data;
      state.diminati = state.transactions.filter((item) => (item.seller_id == uid && item.bid_status !== 2 && item.transaction_status === 0));
      state.pembelian = state.transactions.filter((item) => item.buyer_id == uid); // filter pembelian
      state.loading = false;
      // return { ...state, loading: false, transactions: action.payload.data, };
    },
    [fetchTransaction.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    [fetchTransactionById.pending]: (state) => {
      return { ...state, loading: true, error: null };
    },
    [fetchTransactionById.fulfilled]: (state, action) => {
      return { ...state, loading: false, transaction: action.payload, };
    },
    [fetchTransactionById.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    [BuyerBid.pending]: (state) => {
      return { ...state, loading: true, error: null };
    },
    [BuyerBid.fulfilled]: (state, action) => {
      window.location.reload();
      return { ...state, loading: false, buyerbid: action.payload, };
    },
    [BuyerBid.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    [BidStatus.pending]: (state) => {
      return { ...state, loading: true, error: null };
    },
    [BidStatus.fulfilled]: (state, action) => {
      return { ...state, loading: false, transactions: action.payload.data, };
    },
    [BidStatus.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    [TransactionStatus.pending]: (state) => {
      return { ...state, loading: true, error: null };
    },
    [TransactionStatus.fulfilled]: (state, action) => {
      window.location.href = "/daftar-jual";
      return { ...state, loading: false, transactions: action.payload.data };
    },
    [TransactionStatus.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
  },
});


export const { setLoading } = TransactionSlice.actions;

export default TransactionSlice.reducer;
