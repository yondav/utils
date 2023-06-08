const theme = {
  plain: {
    color: '#ffffff',
    backgroundColor: '#333333',
  },
  styles: [
    {
      types: [
        'arrow',
        'operator',
        'tag'
      ],
      style: {
        color: '#fa74fc',
      },
    },
    {
      types: [ 'boolean', 'number' ],
      style: {
        color: '#ab3df5',
      },
    },
    {
      types: [
        'keyword',
        'constant',
        'builtin',
        'class-name',
        'maybe-class-name',
      ],
      style: {
        color: '#00ffdd',
      },
    },
    {
      types: [
        'inserted',
        'function',
        'attr-name'
      ],
      style: {
        color: '#4bde58',
      },
    },
    {
      types: [ 'deleted' ],
      style: {
        color: '#d45042',
      },
    },
    {
      types: [ 'changed', 'parameter' ],
      style: {
        color: '#ff9900',
      },
    },
    {
      types: [
        'punctuation',
        'symbol',
        'variable'
      ],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: [
        'string',
        'char',
        'selector',
        'attr-value',
        'attr-value punctuation',
      ],
      style: {
        color: '#e8e402',
      },
    },
    {
      types: [
        'comment',
        'prolog',
        'doctype',
        'cdata'
      ],
      style: {
        color: '#969692',
      },
    },
  ],
};

export default theme;
