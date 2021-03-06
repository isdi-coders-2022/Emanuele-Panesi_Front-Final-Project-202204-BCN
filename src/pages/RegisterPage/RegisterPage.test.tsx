import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import RegisterPage from "./RegisterPage";

describe("Given a Register Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render an heading and a register Form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");
      const form = screen.getByLabelText("Username");

      expect(form).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
