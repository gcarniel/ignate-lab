import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3nev00f2301z27ly16929/master',
  cache: new InMemoryCache(),
});
