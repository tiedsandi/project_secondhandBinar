import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import { Theme } from "./Theme";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailProduk from "./pages/DetailProduk";
import Penawaran from "./pages/Penawaran";
import AddProduk from "./pages/AddProduk";
import DaftarJual from "./pages/DaftarJual";
import Profile from "./pages/Profile";
import UpdateProduk from "./pages/UpdateProduk";
import NotFound from "./pages/NotFound";
// import AuthProtect from "./AuthProtect";

function App() {
  const islogin = localStorage.getItem("token");

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Typography fontSize={18} textAlign={'center'} color={'red'}>EN: The API backend is no longer available. || ID: Backend API tidak lagi tersedia. </Typography>
        <Router>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={islogin ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={islogin ? <Profile /> : <Navigate to="/login" />} />

            <Route path="/daftar-jual">
              <Route index element={islogin ? <DaftarJual /> : <Navigate to="/login" />} />
              <Route path=":id" element={islogin ? <DetailProduk /> : <Navigate to="/login" />} />
              <Route path="add" element={islogin ? <AddProduk /> : <Navigate to="/login" />} />
              <Route path="update/:id" element={islogin ? <UpdateProduk /> : <Navigate to="/login" />} />
            </Route>

            <Route path="/penawaran/:id" element={islogin ? <Penawaran /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>
      </div>
    </ThemeProvider >
  );
}

export default App;
