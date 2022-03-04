import { AppProps } from "next/app";
import "../../styles/global.scss";
import { Header } from "../components/Header";
import { Provider as NextAuthProvider } from "next-auth/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "AQSyWK-D0yDoJu3LEbD-9alAECrY-vU_XRDXZhrYUtrEYRuWZf7zcU9X017evIpCKMfX6g4pvYbUpAYi",
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
