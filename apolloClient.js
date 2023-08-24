import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.hygraph.com/v2/clkvy7av00ngj01ta9s1sgq91/master',
  cache: new InMemoryCache(),
});

export default client;
