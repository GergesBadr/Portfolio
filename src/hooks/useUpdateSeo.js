import { useEffect } from "react";

export default function useUpdateSeo(
  title,
  desc = "Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me.",
  image = "https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png",
) {
  useEffect(() => {
    // Title
    document.title = `${title}`;

    // OG title
    document
      .querySelector("meta[property='og:title']")
      .setAttribute("content", title);

    // description
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", desc);

    // OG description
    document
      .querySelector("meta[property='og:description']")
      .setAttribute("content", desc);

    // Image
    document
      .querySelector("meta[property='og:image']")
      .setAttribute("content", image);
  }, [title, desc, image]);
}
