import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const useSEO = ({
  title,
  description,
  keywords = 'luxury fashion, boutique, designer wear, fashion Nagpur',
  ogImage = 'https://zoyacollection.com/og-image.jpg',
  ogType = 'website',
  canonicalUrl = 'https://zoyacollection.com'
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      let tag = document.querySelector(
        property 
          ? `meta[property="${name}"]` 
          : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-image-preview:large');

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);

    // Twitter
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:card', 'summary_large_image');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);
};

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType,
  canonicalUrl 
}: SEOProps) => {
  useSEO({ title, description, keywords, ogImage, ogType, canonicalUrl });
  return null;
};

export default SEO;