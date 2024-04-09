import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorHandler from "./components/ErrorHandler";
import CustomApolloProvider from "./apollo/CustomApolloProvider";
import { SetAlert } from "./components/ErrorHandler/types";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorHandler>
      {(setResponseMessage: SetAlert) => (
        <CustomApolloProvider setResponseMessage={setResponseMessage}>
          <App />
        </CustomApolloProvider>
      )}
    </ErrorHandler>
  </React.StrictMode>
);
