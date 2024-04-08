import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
    graphQLErrors.forEach(({ extensions }) => {
      graphqlErrorHandler({
        cache,
        extensions,
        response,
      });
    });
  }

  if (networkError) {
    // handle network error
    console.log("networkError", networkError);
  }
});

export default errorLink;
