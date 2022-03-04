import { AppProps } from "next/app";
import "../../styles/global.scss";
import { Header } from "../components/Header";
import { Provider as NextAuthProvider } from "next-auth/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "Af-G4h08xmZZe7a5DIBGU3zrXmPFty2I7cTfkPvu6TsRKN-artv6aPgcIkyNlKTRVHKk1CRpk-JCxZuy",
  currency: "BRL",
  intent: "capture",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
