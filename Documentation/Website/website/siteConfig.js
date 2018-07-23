/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/ALSET_RPI.png',
    infoLink: 'https://github.com/ALSETLab',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation' /* title for your website */,
  tagline: 'S3DK - STRONGgrid',
  url: 'https://alsetlab.github.io' /* your website url */,
  baseUrl: '/S3DK1/' /* base url for your project */,
  // For github.io type URLas, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'S3DK',
  organizationName: 'alsetlab',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
      { doc: 'S3DK_Utilities_VI_Overview', label: 'Documentation' },
    /*{ search: true },*/      /*Search can be enabled by request with DocSearch*/
    /*{doc: 'Recompiling Stronggreid DLL', label: 'Please'},*/
    { doc: 'PDC_Reader', label: 'Integrated Examples' },
    {page: 'help', label: 'Help'},
    //{ blog: true, label: 'Link to blog' },/*All websites are built with a blog command, but the boolean must be set to true*/
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/ALSET_RPI.png',
  footerIcon: 'img/ALSET_RPI.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#B22222',
    secondaryColor: '#FF4500',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Rensselaer Polytechnic Institute',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/ALSET_RPI.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
