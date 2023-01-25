import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import InfoPenawaranM from "../components/mobile/InfoPenawaranM";
import NotifikasiM from "../components/mobile/NotifikasiM";
import SidebarM from "../components/mobile/SidebarM";

describe("Info Penawaran mobile", () => {
  test("render info penawaran mobile", () => {
    render(<InfoPenawaranM />);
    expect(screen.getByTestId("info-penawaran-mobile")).toBeInTheDocument();
  });
});

describe("Notifikasi mobile", () => {
  test("render notifikasi mobile", () => {
    render(
      <Provider store={store}>
        <NotifikasiM />
      </Provider>
    );
    expect(screen.getByTestId("notifikasi-mobile")).toBeInTheDocument();
  });
});

describe("Sidebar mobile", () => {
  test("render sidebar mobile", () => {
    render(
      <Provider store={store}>
        <SidebarM />
      </Provider>
    );
    expect(screen.getByTestId("sidebar-mobile")).toBeInTheDocument();
  });
});
