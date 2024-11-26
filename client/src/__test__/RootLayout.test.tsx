import { render, screen } from "@testing-library/react";
import RootLayout from "@/components/layout";
import "@testing-library/jest-dom";

describe("RootLayout", () => {
  it("renders the RootLayout component", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Check if the favicon is set
    const linkElement = document.querySelector("link[rel='icon']");
    expect(linkElement).toHaveAttribute("href", "/images/favicon.ico");

    // Check if the title is set
    expect(document.title).toBe("My App Title");

    // Check if the children are rendered
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
