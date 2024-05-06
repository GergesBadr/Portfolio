import { Helmet } from "react-helmet-async";

function Seo({ title, desc, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}

export default Seo;
