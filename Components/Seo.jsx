import Head from "next/head";
import React from "react";

const Seo = () => {
  return (
    <Head>
      <title>El-Waraa</title>
      <link rel="icon" href="images/Logo.png" />
      <link rel="canonical" href={"url canonique"} />
      <meta name="description" content={"description tendances group"} />
      <meta property="og:title" content={"Tendances Group"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"url canonique"} />
      <meta property="og:image" itemProp="image" content={"url image"} />
      <meta property="og:description" content={"description tendances group"} />
      <link rel="Alternate" hrefLang={"fr-FR"} href={"url canonique"} />
      <meta
        property="og:site_name"
        content="Poséidon SPA : acheter un SPA au meilleur prix"
      />
      <link rel="stylesheet" href="/css/video-react.css" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* TWITTER */}
      <meta property="twitter:title" content={"Tendances Group"} />
      <meta property="twitter:image" content={"url image"} />
      <meta
        property="twitter:image:alt"
        content={"description tendances group"}
      />
      <meta
        property="twitter:description"
        content={"description tendances group"}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
