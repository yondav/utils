/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useLocation } from '@reach/router';
import type { ReactNode } from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';

interface SEOProps {
  title?: string
  description?: string
  children?: ReactNode
}

function SEO({ title = '', description = '', children }: SEOProps) {
  const location = useLocation();
  const siteMetadata = useSiteMetadata();
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    siteName: siteMetadata.title,
    image: `https://via.placeholder.com/1200x630.png/007ACC/fff/?text=${title}`,
    url: `${siteMetadata.siteUrl}${location.pathname}`,
  };

  const isMethodPage = /\/method\//.test(seo.url);

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" key={seo.url} href={seo.url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={isMethodPage ? 'article' : 'website'} />
      <meta property="og:url" content={seo.url} />

      {children}
    </>
  );
}

export type { SEOProps };
export default SEO;
