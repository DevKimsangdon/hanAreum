import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "한아름 농장"}</title>
      <meta name="description" content={description || "청송 꿀사과"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "한아름 농장"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://www.hanareum.shop/"} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="한아름 농장" />
      <meta
        name="naver-site-verification"
        content="28b6cb23b9d4a5e3a52b5b21747d5ac1bf2cd2b6"
      />
    </Head>
  );
};

export default HeadMeta;
