import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DrawerStatus from "../components/drawer/DrawerStatus";
import DrawerTawar from "../components/drawer/DrawerTawar";
import DrawerProductMatch from "../components/drawer/DrawerProductMatch";
import store from "../redux/store";
import { Provider } from "react-redux";

describe("Drawer Status mobile", () => {
  test("render drawer status mobile", () => {
    render(
      <Provider store={store}>
        <DrawerStatus />
      </Provider>
    );
    expect(screen.getByTestId("drawer-status")).toBeInTheDocument();
  });
});

// describe("Drawer tawar mobile", () => {
//   test("render drawer tawar mobile", () => {
//     render(
//       <Provider store={store}>
//         <DrawerTawar />
//       </Provider>
//     );
//     expect(screen.queryByTestId("drawer-tawar")).toBeInTheDocument();
//   });
// });

describe("Drawer product match mobile", () => {
  test("render drawer product match mobile", () => {
    render(
      <Provider store={store}>
        <DrawerProductMatch />
      </Provider>
    );
    expect(screen.getByTestId("drawer-product-match")).toBeInTheDocument();
  });
});
