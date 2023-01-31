// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://teszt.arpusz.hu/graphql",
    cache: new InMemoryCache(),
});

export default client;