import '../styles/globals.css'
import "@fontsource/irish-grover";


import { Layout } from '../components';

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
