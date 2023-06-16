import "@/styles/globals.scss";
import HBOProvider from "@/HBOProvider";
// import '@/styles/main.scss'

export default function App({ Component, pageProps }) {
  return(
  <HBOProvider>
    <Component {...pageProps} />
  </HBOProvider>);
}
