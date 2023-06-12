import { graphql, useStaticQuery } from 'gatsby';

import type { ExportNode } from '../models';

interface GroupedExportList {
  string: { nodes: Omit<ExportNode, 'body'>[] };
}

function useExportList(): GroupedExportList {
  const data = useStaticQuery<GroupedExportList>(graphql`
    {
      string: allMdx(filter: {fields: {type: {eq: "string"}}}) {
        nodes {
          ...ExportNodePreview
        }
      }
    }
  `);

  return data;
}

export type { GroupedExportList };
export default useExportList;
