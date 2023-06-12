import Hero from '../components/Hero';
// import SEO from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';

// function Head() {
//   return <SEO />;
// }

function TemplatePage() {
  const { description } = useSiteMetadata();
  return (
    <Hero description={description} />
  );
}

// export { Head };
export default TemplatePage;
