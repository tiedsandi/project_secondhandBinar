import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import ContainersBox from "../components/global/ContainersBox";
import Disabledbutton from "../components/global/Disabledbutton";
import DropzonePic from "../components/global/DropzonePic";
import FormInput from "../components/global/FormInput";
import InfoPenawaranM from "../components/global/InfoPenawaranM";
import MenuProfile from "../components/global/MenuProfile";
import ModalContainer from "../components/global/ModalContainer";

describe("Containers Box", () => {
  test("render containers box global", () => {
    render(<ContainersBox />);
    expect(screen.getByTestId("container-box")).toBeInTheDocument();
  });
});

describe("Disabled button global", () => {
  test("render disabled button global", () => {
    render(<Disabledbutton />);
    expect(screen.getByTestId("disabled-button")).toBeInTheDocument();
  });
});

// describe("Dropzone Pic global", () => {
//   test("render dropzone pic global", () => {
//     render(
//       <Provider store={store}>
//         <DropzonePic />
//       </Provider>
//     );
//     expect(screen.getByTestId("dropzone-pic")).toBeInTheDocument();
//   });
// });

describe("Form Input global", () => {
  test("render form input global", () => {
    render(<FormInput />);
    expect(screen.getByTestId("form-input")).toBeInTheDocument();
  });
});

// describe("Info Penawaran global", () => {
//   test("render info penawaran global", () => {
//     render(
//       <Provider store={store}>
//         <InfoPenawaranM />
//       </Provider>
//     );
//     expect(screen.getByTestId("info-penawaran-global")).toBeInTheDocument();
//   });
// });

describe("Menu Profile global", () => {
  test("render menu profile global", () => {
    render(<MenuProfile />);
    expect(screen.getByTestId("menu-profile")).toBeInTheDocument();
  });
});

describe("Modal Container global", () => {
  test("render modal container global", () => {
    render(<ModalContainer />);
    expect(screen.getByTestId("modal-container")).toBeInTheDocument();
  });
});
