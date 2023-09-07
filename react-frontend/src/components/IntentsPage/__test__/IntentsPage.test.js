import React from "react";
import { render, screen } from "@testing-library/react";

import IntentsPage from "../IntentsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders intents page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <IntentsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("intents-datatable")).toBeInTheDocument();
    expect(screen.getByRole("intents-add-button")).toBeInTheDocument();
});
