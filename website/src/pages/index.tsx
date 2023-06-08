import Hero from '../components/hero';
// import SEO from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';

// function Head() {
//   return <SEO />;
// }

function PostListTemplate() {
  const { author, title, description } = useSiteMetadata();
  return (
    <Hero
      author={author}
      title={title}
      description={description}
    />
  );
}

// export { Head };
export default PostListTemplate;
