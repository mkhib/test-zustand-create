import { render } from "@testing-library/react-native";
import Input from "../components/Input";

describe("Testing App Component", () => {
  it("should render", async () => {
    const { findByPlaceholderText } = render(<Input />);

    const textInput = await findByPlaceholderText("Text");

    expect(textInput).toBeTruthy();
  });
});
