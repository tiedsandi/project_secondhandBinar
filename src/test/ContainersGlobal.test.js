import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import ContentTawar from "../containers/global/ContentTawar";
import InfoPembeli from "../containers/global/InfoPembeli";
import InfoProduk from "../containers/global/InfoProduk";
import InfoProdukDetail from "../containers/global/InfoProdukDetail";
import NoData from "../containers/global/NoData";
import SetKategori from "../containers/global/SetKategori";
import UserProduk from "../containers/global/UserProduk";

// describe("content tawar global", () => {
//   test("render content tawar global", () => {
//     render(
//       <Provider store={store}>
//         <ContentTawar />
//       </Provider>
//     );
//     expect(screen.getByTestId("category-page")).toBeInTheDocument();
//   });
// });

describe("info pembeli global", () => {
  test("render info pembeli global", () => {
    render(<InfoPembeli />);
    expect(screen.getByTestId("info-pembeli")).toBeInTheDocument();
  });
});

// describe("info produk global", () => {
//   test("render info produk global", () => {
//     render(
//       <Provider store={store}>
//         <InfoProduk />
//       </Provider>
//     );
//     expect(screen.queryAllByTestId("info-produk")).toBeInTheDocument();
//   });
// });

// describe("info produk detail global", () => {
//   test("render info produk detail global", () => {
//     render(
//       <Provider store={store}>
//         <InfoProdukDetail />
//       </Provider>
//     );
//     expect(screen.queryAllByTestId("info-produk-detail")).toBeInTheDocument();
//   });
// });

describe("no data global", () => {
  test("render no data global", () => {
    render(<NoData />);
    expect(screen.queryByTestId("no-data")).toBeInTheDocument();
  });
});

describe("kategori global", () => {
  test("render kategori global", () => {
    render(
      <Provider store={store}>
        <SetKategori />
      </Provider>
    );
    expect(screen.queryByTestId("kategori")).toBeInTheDocument();
  });
});

// describe("user produk global", () => {
//   test("render user produk global", () => {
//     render(
//       <Provider store={store}>
//         <UserProduk />
//       </Provider>
//     );
//     expect(screen.queryByTestId("user-produk")).toBeInTheDocument();
//   });
// });
