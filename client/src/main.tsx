import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const error = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map((item) => {
      console.log(item);
    });
  }
});

const link = from([
  error,
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

const appolo = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={appolo}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
