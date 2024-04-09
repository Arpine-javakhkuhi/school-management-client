import React, { useMemo } from "react";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import storage from "../../storage/Storage";
import { checkToken } from "../../components/utils/checkAccessToken";
import { SetAlert } from "../../components/ErrorHandler/types";

interface ClientProps {
  setResponseMessage?: SetAlert;
  children: React.ReactNode;
}

const createErrorLink = (setResponseMessage?: SetAlert) => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(
          `11111111[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
        setResponseMessage &&
          setResponseMessage({ type: "error", message: message });
      });
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });
};

const createAuthLink = () => {
  return setContext((_, { headers }) => {
    const token = storage.get("accessToken");

    if (token) {
      const isValidToken = checkToken(token);
      if (isValidToken) {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${token}`,
          },
        };
      }
    }
    return {
      headers: {
        ...headers,
      },
    };
  });
};

const CustomApolloProvider = ({
  setResponseMessage,
  children,
}: ClientProps) => {
  const apolloClient = useMemo(() => {
    const errorLink = createErrorLink(setResponseMessage);

    const httpLink = createHttpLink({
      uri: process.env.REACT_APP_API_URL,
    });

    const authLink = createAuthLink();

    const client = new ApolloClient({
      link: ApolloLink.from([errorLink, authLink, httpLink]),
      cache: new InMemoryCache(),
    });

    return client;
  }, [setResponseMessage]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default CustomApolloProvider;
