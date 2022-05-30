import { notify } from 'react-notify-toast';
import { ApolloClient } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "@apollo/client";
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors }) => {
  // Catching and displaying errors
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => notify.show(message, 'error'))
  }
});
const port = "4000";
const httpLink = createHttpLink({ uri: `http://localhost:${port}/graphql` });

const link = ApolloLink.from([
  errorLink,
  httpLink,
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
