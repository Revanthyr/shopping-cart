import { describe, it, expect } from "vitest";
import { render, screen, getByRole } from "@testing-library/react";
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
  it("- button works", async () => {
    render(<Product />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    await user.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByRole("spinbutton").value).toBe("0");
  });
  it("doesnt go below 0", async () => {
    render(<Product />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    await user.click(screen.getByRole("button", { name: "-" }));
    await user.click(screen.getByRole("button", { name: "-" }));
    await user.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByRole("spinbutton").value).toBe("0");
  });
});

// test that clicking buy adds an array somewhere
// test that cart, given an array, displays the elements of that array
// test that given an array, the cart will show how many elements there are
// tset that given an array, the cart will show total cost
// test api calls
