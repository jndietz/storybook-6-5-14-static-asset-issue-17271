import { render } from "@testing-library/react";
import SampleComponent from "./SampleComponent";

describe("SampleComponent tests", () => {
  it("should render 'Hello, world!'", () => {
    const { getByText } = render(<SampleComponent />);
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });

  it("should render 'Hello, Marty!'", () => {
    const { getByText } = render(<SampleComponent name="Marty" />);
    expect(getByText("Hello, Marty!")).toBeInTheDocument();
  });
});
