import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetVariant from "./components/getVariant";

const ReactAppBootstrap = context => {
  
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
    headers: {"Authorization": `Bearer ${context.graphQLToken}`}
  });

  console.log("Context: ", context.graphQLToken);

  ReactDOM.render(
    <React.StrictMode>
    <ApolloProvider client={client}>
      <GetVariant />
    </ApolloProvider>
    </React.StrictMode>,
    document.querySelector("#root")
  );
}

export default ReactAppBootstrap;