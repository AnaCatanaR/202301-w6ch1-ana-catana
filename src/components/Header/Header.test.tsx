import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'To do list title'", () => {
      render(<Header />);
      const title = "To do list title";

      const expectedResult = screen.getByRole("heading", { name: title });

      expect(expectedResult).toBeVisible();
    });
  });
});
