import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import AddButton from "../components/buttons/AddButton";
import AddButtonM from "../components/buttons/AddButtonM";
import ButtonBack from "../components/buttons/ButtonBack";
import ButtonCategory from "../components/buttons/ButtonCategory";
import ButtonJualHome from "../components/buttons/ButtonJualHome";
import ImgDropProfile from "../components/buttons/ImgDropProfile";
import ButtonClick from "../components/global/ButtonClick";
import ButtonJual from "../components/global/ButtonJual";

describe("Button tambah produk", () => {
  test("render add button", () => {
    render(<AddButton />);
    expect(screen.getByText(/Tambah Produk/i)).toBeInTheDocument();
  });
});

describe("Button tambah produkM", () => {
  test("render add buttonM", () => {
    render(<AddButtonM />);
    expect(screen.getByText(/Tambah Produk/i)).toBeInTheDocument();
  });
});

describe("Button kembali", () => {
  test("render button kembali", () => {
    render(
      <Router>
        <ButtonBack />
      </Router>
    );
    expect(screen.getByTestId("button-back")).toBeInTheDocument();
  });
});

describe("Button kategori", () => {
  test("render button kategori", () => {
    render(<ButtonCategory />);
    expect(screen.getByTestId("button-category")).toBeInTheDocument();
  });
});

describe("Button jual", () => {
  test("render button jual ", () => {
    render(
      <Router>
        <ButtonJualHome />
      </Router>
    );
    expect(screen.getByTestId("button-jual-home")).toBeInTheDocument();
  });
});

describe("Button jual global", () => {
  test("render button jual global", () => {
    render(<ButtonJual />);
    expect(screen.getByTestId("button-jual")).toBeInTheDocument();
  });
});

describe("Button click primary", () => {
  it("render the button click primary", () => {
    render(<ButtonClick primary />);
    expect(screen.getByTestId("button-click-primary")).toBeInTheDocument();
  });
});

describe("Button click disabled", () => {
  it("render the button click disabled", () => {
    render(<ButtonClick disabled />);
    expect(screen.queryByTestId("button-click-disabled")).toBeDefined();
  });
});

describe("Button click secondary", () => {
  it("render the button click secondary", () => {
    render(<ButtonClick />);
    expect(screen.queryByTestId("button-click-secondary")).toBeDefined();
  });
});

// describe("Button drop file", () => {
//   it("render button drop file ", () => {
//     render(
//       <Provider store={store}>
//         <ImgDropProfile />
//       </Provider>
//     );
//     expect(screen.getByTestId("button-drop-file")).toBeInTheDocument();
//   });
// });
