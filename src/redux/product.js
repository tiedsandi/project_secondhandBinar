import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apisecondhand from "./apis/apisecondhand";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (data) => {
    if (data.idKategory) {
      if (data.search) { // ada searchnya
        const response = await apisecondhand.get(`/product/public?product=${data.search}&category=${data.idKategory}`);
        return response.data;
      } else {  // kategori doang
        const response = await apisecondhand.get(`/product/public?category=${data.idKategory}`);
        return response.data;
      }
    } else if (data.search) { // ada searchnya
      const response = await apisecondhand.get(`/product/public?product=${data.search}`);
      return response.data;
    } else {
      const response = await apisecondhand.get("/product/public");
      return response.data;
    }
  }
);

export const fetchProductItem = createAsyncThunk(
  "product/fetchProductItem",
  async (id) => {
    const response = await apisecondhand.get(`/product/${id}/public`, {
      headers: {
        uid: localStorage.getItem("uid"),
      },
    });
    return response.data;
  }
);

export const fetchProductsUser = createAsyncThunk(
  "products/fetchProductsUser",
  async () => {
    const response = await apisecondhand.get(`/product`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const fetchCreateProduct = createAsyncThunk(
  "products/fetchCreateProduct",
  async (data) => {
    const response = await apisecondhand.post(`/product`, data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const uploadImageProduct = createAsyncThunk(
  "products/uploadImageProduct",
  async (data) => {
    const response = await apisecondhand.post(`/product/upload-pics`, data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
        ContentType: "multipart/form-data",
      },
    });
    return response.data;
  }
);

export const fetchUpdateProduct = createAsyncThunk(
  "products/fetchUpdateProduct",
  async ({ id, data }) => {
    const response = await apisecondhand.put(`/product/${id}`, data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

const initialState = {
  products: [],
  productsDetail: [],
  productsUser: [],
  productAktif: [],
  terjual: [],
  user: {},
  img: [],
  loading: false,
  error: null,
  loadingButton: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoadingButton: (state, action) => {
      state.loadingButton = action.payload;
    }
  },
  extraReducers: {
    // =================== GET PRODUCTS ============================
    [fetchProducts.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchProducts.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      return { ...state, loading: false, products: action.payload };
    },
    [fetchProducts.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
    // ===================== GET BY ID ===============================
    [fetchProductItem.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchProductItem.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      return {
        ...state,
        loading: false,
        productsDetail: action.payload,
        img: action.payload.data.product_pictures,
        user: action.payload.data.user,
      };
    },
    [fetchProductItem.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
    // ==================== GET BY USER ==============================
    [fetchProductsUser.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchProductsUser.fulfilled]: (state, action) => {
      state.terjual = action.payload.data.filter((item) => item.status == 3);
      state.productAktif = action.payload.data.filter((item) => item.status != 3);
      state.productsUser = action.payload.data.filter((item) => item.status == 1);
      state.loading = false;
      // return { ...state, loading: false, productsUser: action.payload };
    },
    [fetchProductsUser.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
    // ==================== CREATE ==============================
    [fetchCreateProduct.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchCreateProduct.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      window.location.href = "/daftar-jual";
      return { ...state, loading: false };
    },
    [fetchCreateProduct.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
    // ==================== UPLOAD IMAGE ==============================
    [uploadImageProduct.pending]: (state, action) => {
      return { ...state, loading: true, error: null, loadingButton: true };
    },
    [uploadImageProduct.fulfilled]: (state, action) => {
      return { ...state, loading: false, loadingButton: false };
    },
    [uploadImageProduct.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    // ==================== UPDATE ==============================
    [fetchUpdateProduct.pending]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [fetchUpdateProduct.fulfilled]: (state, action) => {
      window.location.href = "/daftar-jual";
      return { ...state, loading: false };
    },
    [fetchUpdateProduct.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
  },
});

export const { setLoadingButton } = productsSlice.actions;
export const { createProduct } = productsSlice.actions;
export const { setLoading } = productsSlice.actions;

export default productsSlice.reducer;
