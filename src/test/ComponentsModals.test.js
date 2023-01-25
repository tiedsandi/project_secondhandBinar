import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import ModalNotifikasi from "../components/modals/ModalNotifikasi";
import ModalproductMatch from "../components/modals/ModalproductMatch";
import ModalStatus from "../components/modals/ModalStatus";

describe("Modal notifikasi", () => {
  test("render modal notifikasi", () => {
    render(
      <Provider store={store}>
        <ModalNotifikasi />
      </Provider>
    );
    expect(screen.getByTestId("modal-notifikasi")).toBeInTheDocument();
  });
});

// describe("Modal product match ", () => {
//   test("render modal product match ", () => {
//     render(
//       <Provider store={store}>
//         <ModalproductMatch />
//       </Provider>
//     );
//     expect(screen.getByTestId("modal-product-match")).toBeInTheDocument();
//   });
// });

describe("Modal status", () => {
  test("render modal status", () => {
    render(
      <Provider store={store}>
        <ModalStatus />
      </Provider>
    );
    expect(screen.getByTestId("modal-status")).toBeInTheDocument();
  });
});
