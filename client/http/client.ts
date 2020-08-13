import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_URL,
  credentials: 'include'
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});