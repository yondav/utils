// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// gatsby-mdx-plugin is unable to read file with type declarations
import { Type } from '../components/Template';

function TypeTemplate(props) {
  const { pageContext: { title, description, exports } } = props;

  return (
    <Type
      title={title}
      description={description}
      exports={exports}
    />
  );
}

export default TypeTemplate;
