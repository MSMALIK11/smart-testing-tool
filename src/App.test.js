import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App"
const client = new QueryClient();

test("Render the App Component", () => {
    render(
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
    )
})