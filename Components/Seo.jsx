import Head from "next/head";
import React from "react";

const Seo = () => {
  return (
    <Head>
      <title>El-Waraa</title>
      <link rel="icon" href="images/logofinal.png" />
      <link rel="canonical" href={"url canonique"} />
      <meta name="description" content={"description elwaraa"} />
      <meta property="og:title" content={"elwaraa"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"url canonique"} />
      <meta property="og:image" itemProp="image" content={"url image"} />
      <meta property="og:description" content={"description elwaraa"} />
      <link rel="Alternate" hrefLang={"fr-FR"} href={"url canonique"} />
      <meta
        property="og:site_name"
        content="Poséidon SPA : acheter un SPA au meilleur prix"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

      {/* TWITTER */}
      <meta property="twitter:title" content={"elwaraa"} />
      <meta property="twitter:image" content={"url image"} />
      <meta
        property="twitter:image:alt"
        content={"description elwaraa group"}
      />
      <meta
        property="twitter:description"
        content={"description el waraa group"}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
