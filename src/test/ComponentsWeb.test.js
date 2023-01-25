import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import InfoPenawaran from "../components/web/InfoPenawaran";
import KategoryPage from "../components/web/KategoryPage";
import SearchField from "../components/web/SearchField";
import WallpaperLogin from "../components/web/WallpaperLogin";

// describe("Info penawaran web", () => {
//   test("render info penawaran", () => {
//     render(
//       <Router>
//         <Provider store={store}>
//           <InfoPenawaran />
//         </Provider>
//       </Router>
//     );
//     expect(screen.getByTestId("info-penawaran-web")).toBeInTheDocument();
//   });
// });

describe("Kategory page web", () => {
  test("render Kategory page", () => {
    render(<KategoryPage />);
    expect(screen.getByTestId("category-page")).toBeInTheDocument();
  });
});

describe("Search field web", () => {
  test("render Search field", () => {
    render(<Provider store={store}><SearchField /></Provider>);
    expect(screen.getByTestId("search-field")).toBeInTheDocument();
  });
});

describe("Wallpaper login web", () => {
  test("render Wallpaper login", () => {
    render(
      <Router>
        <WallpaperLogin />
      </Router>
    );
    expect(screen.getByTestId("wallpaper-login")).toBeInTheDocument();
  });
});
