import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 2 input fields and 2 buttons", () => {
      const expectedButtons = 2;

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const buttons = screen.getAllByRole("button");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();

      expect(buttons).toHaveLength(expectedButtons);
    });
  });
  describe("When the user types the username 'lelo' in the input field", () => {
    test("Then it should render the username 'lelo'", () => {
      const expectedInputText = "lelo";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const inputField = screen.getByLabelText("Username");

      userEvent.type(inputField, expectedInputText);

      expect(inputField).toHaveValue(expectedInputText);
    });
  });
  describe("When the user doesn't type any username or password", () => {
    test("Then the login button should be disabled", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      const button = screen.getByRole("button", { name: "LOGIN" });

      expect(button).toBeDisabled();
    });
  });
  describe("When the user fill the username and password input fields", () => {
    test("Then the login button should be enabled", () => {
      const username = "lelo";
      const password = "lelo";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const registerButton = screen.getByRole("button", { name: "LOGIN" });

      userEvent.type(usernameInput, username);
      userEvent.type(passwordInput, password);

      expect(registerButton).not.toBeDisabled();
    });
  });
});
