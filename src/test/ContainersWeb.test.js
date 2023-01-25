import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import CardProduk from "../containers/web/CardProduk";
import Carousel from "../containers/web/Carousel";
import CategoryBox from "../containers/web/CategoryBox";
import Header from "../containers/web/Header";
import ProdukDiminati from "../containers/web/ProdukDiminati";
import ProfileList from "../containers/web/ProfileList";

// describe("card produk web", () => {
//   test("render card produk web", () => {
//     render(
//       <Provider store={store}>
//         <CardProduk />
//       </Provider>
//     );
//     expect(screen.getByTestId("card-produk-web")).toBeInTheDocument();
//   });
// });

describe("carousel web", () => {
  test("render carousel web", () => {
    render(<Carousel />);
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
  });
});

describe("category box web", () => {
  test("render category box web", () => {
    render(<CategoryBox />);
    expect(screen.getByTestId("category-box")).toBeInTheDocument();
  });
});

describe("header web", () => {
  test("render header web", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("header-web")).toBeInTheDocument();
  });
});

describe("header title web", () => {
  test("render header title web", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.queryAllByTestId("title-header-web")).toBeTruthy();
  });
});

// describe("produk diminati web", () => {
//   test("render produk diminati web", () => {
//     render(
//       <Provider store={store}>
//         <ProdukDiminati />
//       </Provider>
//     );
//     expect(screen.getByTestId("produk-diminati-web")).toBeInTheDocument();
//   });
// });

describe("profile list web", () => {
  test("render profile list web", () => {
    render(
      <Provider store={store}>
        <ProfileList />
      </Provider>
    );
    expect(screen.getByTestId("profile-list-web")).toBeInTheDocument();
  });
});
