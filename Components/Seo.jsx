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

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
        integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
        crossorigin="anonymous"></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>

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
