import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "../src/Product";
import userEvent from "@testing-library/user-event";

describe("Product component", () => {
  it("renders input on button click", async () => {
    render(<Product />);

    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });
  it("+ button works", async () => {
    render(<Product />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByRole("spinbutton").value).toBe("2");
  });

  it("doesnt go below 0", async () => {
    render(<Product />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    const input = screen.getByRole("spinbutton");
    await user.click(screen.getByRole("button", { name: "-" }));

    expect(input).not.toBeInTheDocument();
  });
  it("shows given data", async () => {
    const image = "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg";
    const name = "t-shirt";
    const price = "4.99";
    render(<Product image={image} name={name} price={price} />);
    const imageDOM = screen.getByRole("img");
    const nameDOM = screen.getByText("t-shirt");
    const priceDOM = screen.getByText("4.99$");
    expect(imageDOM).toBeInTheDocument();
    expect(nameDOM).toBeInTheDocument();
    expect(priceDOM).toBeInTheDocument();
  });
});
