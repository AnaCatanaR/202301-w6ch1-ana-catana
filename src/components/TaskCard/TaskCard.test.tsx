import { screen, render } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("Given the TaskCard component", () => {
  describe("When it renders with the text 'Task description'", () => {
    test("Then it should show the text 'Task description'", () => {
      const label = "Task description";

      const task = {
        id: 1,
        name: "Task description",
        isDone: false,
      };

      render(<TaskCard toDo={task} />);

      const expectedResult = screen.getByRole("heading", {
        name: label,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
