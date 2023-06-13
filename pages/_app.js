import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";
import "../custom.scss";
import Seo from "../Components/Seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Seo />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
