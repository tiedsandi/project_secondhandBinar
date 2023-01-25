import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import CardProdukM from "../containers/mobile/CardProdukM";
import HeaderM from "../containers/mobile/HeaderM";
import HeroM from "../containers/mobile/HeroM";
import HomeUpM from "../containers/mobile/HomeUpM";
import ProdukDiminatiM from "../containers/mobile/ProdukDiminatiM";
import ProfileListM from "../containers/mobile/ProfileListM";

// describe("card produk mobile", () => {
//   test("render card produk mobile", () => {
//     render(
//       <Provider store={store}>
//         <CardProdukM />
//       </Provider>
//     );
//     expect(screen.getByTestId("card-produk-mobile")).toBeInTheDocument();
//   });
// });

describe("header mobile", () => {
  test("render header mobile", () => {
    render(
      <Router>
        <HeaderM />
      </Router>
    );
    expect(screen.getByTestId("header-mobile")).toBeInTheDocument();
  });
});

describe("hero mobile", () => {
  test("render hero mobile", () => {
    render(
      <Router>
        <HeroM />
      </Router>
    );
    expect(screen.getByTestId("hero-mobile")).toBeInTheDocument();
  });
});

describe("Home mobile", () => {
  test("render Home mobile", () => {
    render(
      <Provider store={store}>
        <HomeUpM />
      </Provider>
    );
    expect(screen.getByTestId("home-mobile")).toBeInTheDocument();
  });
});

// describe("produk diminati mobile", () => {
//   test("render produk diminati mobile", () => {
//     render(
//       <Provider store={store}>
//         <ProdukDiminatiM />
//       </Provider>
//     );
//     expect(screen.getByTestId("produk-diminati-mobile")).toBeInTheDocument();
//   });
// });

describe("profile list mobile", () => {
  test("render profile list mobile", () => {
    render(
      <Provider store={store}>
        <ProfileListM />
      </Provider>
    );
    expect(screen.getByTestId("profile-mobile")).toBeInTheDocument();
  });
});
