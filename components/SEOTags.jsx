import React from "react";
import Head from "next/head";

const SEOTags = ({ title, description }) => {
  const titleTemplate = `${
    title ? `${title} - ` : ""
  }Cincinnati Tree Care & Removal Experts - Sherdec`;
  const defaultDescription =
    "Sherdec Tree Service leads the way with the Tri-state's most comprehensive tree care service.";

  return (
    <Head>
      <title>{titleTemplate}</title>
      <meta property="og:title" content={titleTemplate} />
      <meta name="twitter:title" content={titleTemplate} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="description"
        content={description ? `${description}` : `${defaultDescription}`}
      />
      <meta
        property="og:description"
        content={description ? `${description}` : `${defaultDescription}`}
      />
      <meta
        name="twitter:description"
        content={description ? `${description}` : `${defaultDescription}`}
      />

      {/* 1200 x 630 */}
      {/* <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg"/>
			<meta name="twitter:image" content=" http://euro-travel-example.com/thumbnail.jpg"/>
			<meta name="twitter:image:width" content= "..." />
			<meta name="twitter:image:height" content= "..." />
			<meta name="twitter:card" content="summary_large_image"/> */}

      {/* <meta property="og:url" content="http://euro-travel-example.com/index.htm"/> */}
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SEOTags;
