import { ApolloClient, InMemoryCache } from "@apollo/client";

// const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });

// const appLink = from([errorLink, httpLink]);

// const client = new ApolloClient({
//   link: appLink,
//   cache: new InMemoryCache(),
// });
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

export default client;
