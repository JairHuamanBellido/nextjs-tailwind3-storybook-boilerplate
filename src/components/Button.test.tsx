import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider, UseQueryResult } from "react-query";
import Button from "./Button";

describe("Button", () => {
  const queryClient = new QueryClient();
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Render without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Button />
      </QueryClientProvider>
    );

    expect(screen.getByText(/Button/i)).toBeInTheDocument()
  });
});
