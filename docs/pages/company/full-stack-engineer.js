import React from 'react';
import TopLayoutCompany from 'docs/src/modules/components/TopLayoutCompany';
import { prepareMarkdown } from 'docs/src/modules/utils/parseMarkdown';

const pageFilename = 'company/full-stack-engineer';
const requireRaw = require.context(
  '!raw-loader!../../src/pages/company/careers',
  false,
  /full-stack-engineer\.md$/,
);

export default function Page({ demos, docs }) {
  return <TopLayoutCompany demos={demos} docs={docs} />;
}

Page.getInitialProps = () => {
  const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });
  return { demos, docs };
};
