import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    
          <Component {...pageProps} />
  )}

export default MyApp
