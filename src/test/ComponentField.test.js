import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AddProdukField from "../components/fields/AddProdukField";
import LoginField from "../components/fields/LoginField";
import RegisterField from "../components/fields/RegisterField";
import SearchFieldM from "../components/fields/SearchFieldM";
import UpdateProdukField from "../components/fields/UpdateProdukField";

describe("add produk field", () => {
  test("render add produk field", () => {
    render(
      <Provider store={store}>
        <AddProdukField />
      </Provider>
    );
    expect(screen.getByTestId("add-produk-field")).toBeInTheDocument();
  });
});

describe("login field", () => {
  test("render login field", () => {
    render(
      <Provider store={store}>
        <Router>
          <LoginField />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId("login-field")).toBeInTheDocument();
  });
});

describe("register field", () => {
  test("render register field", () => {
    render(
      <Provider store={store}>
        <Router>
          <RegisterField />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId("register-field")).toBeInTheDocument();
  });
});

describe("search field", () => {
  test("render search field", () => {
    render(
      <Provider store={store}>
        <SearchFieldM />
      </Provider>
    );
    expect(screen.getByTestId("search-field")).toBeInTheDocument();
  });
});

// describe("update produk field", () => {
//   test("render update produk field", () => {
//     render(
//       <Provider store={store}>
//         <UpdateProdukField />
//       </Provider>
//     );
//     expect(screen.getByTestId("update-produk-field")).toBeInTheDocument();
//   });
// });
