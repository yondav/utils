import type { ExportNode } from '../models';

type ExportTypes = ExportNode[ 'fields' ][ 'type' ];
type ExportCategories = ExportNode[ 'fields' ][ 'category' ];

type GroupedExportNodes<T extends ExportTypes> = {
  [ type in T ]: {
    [ category in ExportCategories ]: Omit<ExportNode, 'body'>[]
  }
}

// Attach a hook and a demo to a post and ignore alone items
function filterExports<T extends ExportTypes>(
  type: T,
  nodes: { nodes: Omit<ExportNode, 'body'>[] }
): GroupedExportNodes<T> {
  const entries = nodes.nodes.map(node => [
    node.fields.category,
    nodes.nodes.filter(
      // eslint-disable-next-line max-len
      nodeArr => nodeArr.fields.category === node.fields.category
    ).sort((a, b) => {
      if (a.fields.name < b.fields.name) return -1;
      if (a.fields.name > b.fields.name) return 1;
      return 0;
    })
  ]);

  const exportNodes = {
    [type]: Object.fromEntries(
      entries
    )
  } as GroupedExportNodes<T>;

  return exportNodes;
}

export type { ExportTypes, ExportCategories, GroupedExportNodes };
export { filterExports };
