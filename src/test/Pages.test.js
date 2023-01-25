import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AddProduk from "../pages/AddProduk";
import NotFound from "../pages/NotFound";
import DaftarJual from "../pages/DaftarJual";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Penawaran from "../pages/Penawaran";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateProduk from "../pages/UpdateProduk";

describe("add produk page", () => {
  test("render add produk page", () => {
    render(
      <Provider store={store}>
        <Router>
          <AddProduk />
        </Router>
      </Provider>
    );
    expect(screen.queryByTestId("add-produk-page")).toBeInTheDocument();
  });
});

describe("not found page", () => {
  test("render not found page", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});

// describe("daftar jual page", () => {
//   test("render daftar jual page", () => {
//     render(
//       <Provider store={store}>
//         <DaftarJual />
//       </Provider>
//     );
//     expect(screen.queryByTestId("daftar-jual-page")).toBeInTheDocument();
//   });
// });

// describe("home page", () => {
//   test("render home page", () => {
//     render(
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     );
//     expect(screen.getByTestId("home-page")).toBeInTheDocument();
//   });
// });

// describe("login page", () => {
//   test("render login page", () => {
//     render(
//       <Provider store={store}>
//         <Router>
//           <Login />
//         </Router>
//       </Provider>
//     );
//     expect(screen.getByTestId("login-page")).toBeInTheDocument();
//   });
// });

// describe("penawaran page", () => {
//   test("render penawaran page", () => {
//     render(
//       <Provider store={store}>
//         <Penawaran />
//       </Provider>
//     );
//     expect(screen.getByTestId("penawaran-page")).toBeInTheDocument();
//   });
// });

// describe("profile page", () => {
//   test("render profile page", () => {
//     render(
//       <Provider store={store}>
//         <Router>
//           <Profile />
//         </Router>
//       </Provider>
//     );
//     expect(screen.getByTestId("profile-page")).toBeInTheDocument();
//   });
// });

// describe("register page", () => {
//   test("render register page", () => {
//     render(
//       <Provider store={store}>
//         <Router>
//           <Register />
//         </Router>
//       </Provider>
//     );
//     expect(screen.getByTestId("register-page")).toBeInTheDocument();
//   });
// });

// describe("update produk page", () => {
//   test("render update produk page", () => {
//     render(
//       <Provider store={store}>
//         <Router>
//           <UpdateProduk />
//         </Router>
//       </Provider>
//     );
//     expect(screen.getByTestId("update-produk-page")).toBeInTheDocument();
//   });
// });
