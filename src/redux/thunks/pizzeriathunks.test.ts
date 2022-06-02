import mockPizzerias from "../../mocks/mockPizzerias";
import { server } from "../../mocks/server";
import { loadPizzeriasActionCreator } from "../features/pizzeriasSlice";
import { loadPizzeriasThunk } from "./pizzeriathunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadPizzeriasThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the loadPizzeriasActionCreator", async () => {
      const dispatch = jest.fn();

      const token = "1234567890";

      const loadAction = loadPizzeriasActionCreator(mockPizzerias);
      const thunk = loadPizzeriasThunk(token);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });
  });
});