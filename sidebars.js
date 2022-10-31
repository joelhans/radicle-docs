const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    'get-started',
    'migrate-github-radicle',
    'troubleshooting',
    {
      type: 'category',
      label: 'Code hosting',
      collapsed: false,
      items: [
        'using-radicle/create',
        'using-radicle/view-share',
        'using-radicle/push',
        'using-radicle/clone',
        'using-radicle/identity',
      ]
    },
    {
      type: 'category',
      label: 'Code collaboration',
      collapsed: false,
      items: [
        'using-radicle/collaboration',
        'using-radicle/issues',
        'using-radicle/track-review-merge',
      ]
    },
    {
      type: 'category',
      label: 'Understanding Radicle',
      collapsed: false,
      items: [
        'understanding-radicle/how-radicle-works',
        'understanding-radicle/radicle-versus-github-gitlab',
        'understanding-radicle/glossary',
        'understanding-radicle/faq',
      ]
    },
  ],
  communitySidebar: [
    'community/community',
  ],
  governanceSidebar: [
    'governance/README',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'governance/how-governance-works',
        'governance/get-started',
        'governance/obtain-rad',
      ]
    },
    {
      type: 'category',
      label: 'Learn more',
      collapsed: false,
      items: [
        'governance/transition-dao',
        'governance/treasury',
        'governance/calls-notes-recordings',
      ]
    },
  ],
};

module.exports = sidebars;
