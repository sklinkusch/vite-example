import { describe, expect, it } from "vitest";
import MessageField from "./MessageField";
import { render, screen } from "../../../utils/test-utils";

describe("tests on MessageField", () => {
  it("renders with text Sophia", () => {
    render(<MessageField text="Sophia" />);
    expect(screen.getByText(/Sophia/)).toBeInTheDocument();
  });

  it("renders with text Bea", () => {
    render(<MessageField text="Bea" />);
    expect(screen.getByText(/Bea/)).toBeInTheDocument();
  });

  it("renders with text Barbara", () => {
    render(<MessageField text="Barbara" />);
    expect(screen.getByText(/Barbara/)).toBeInTheDocument();
  });
});
