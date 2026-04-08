import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Updates document.title and the meta description tag on every route.
 * Works without react-helmet by directly mutating the DOM in an effect.
 */
export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Self-referencing canonical URL
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://www.becomingthesuccess.com${window.location.pathname}`);
  }, [title, description]);
};
