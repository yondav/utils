import { useEffect } from 'react';

import SEO from '../components/seo';

const pageData = {
  title: 'Page Not Found',
  description: "You just hit a route that doesn't exist... the sadness.",
};

function Head() {
  return (
    <SEO
      title={`${pageData.title}`}
      description={pageData.description}
    />
  );
}

function NotFoundPage() {
  useEffect(() => {
    console.log({ pageData });
  }, []);

  return <div />;
}

export { Head };
export default NotFoundPage;
