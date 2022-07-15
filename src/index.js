import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user-context";
import { NotesContextProvider } from "./context/notes-context";
import { OperationsContextProvider } from "./context/operations-context";
import { AuthContextProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <NotesContextProvider>
          <OperationsContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </OperationsContextProvider>
        </NotesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
