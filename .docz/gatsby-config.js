const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Gatsby Starter Default',
    description:
      'A simple starter to get up and developing quickly with Gatsby',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Gatsby Starter Default',
        description:
          'A simple starter to get up and developing quickly with Gatsby',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/qingyudeng/projects/my-gatsby-site-with-docz',
          templates:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/node_modules/docz-core/dist/templates',
          docz: '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz',
          cache:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz/.cache',
          app: '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz/app',
          appPackageJson:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/package.json',
          appTsConfig:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/tsconfig.json',
          gatsbyConfig:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/gatsby-config.js',
          gatsbyBrowser:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/gatsby-browser.js',
          gatsbyNode:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/gatsby-node.js',
          gatsbySSR:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/gatsby-ssr.js',
          importsJs:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz/app/imports.js',
          rootJs:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz/app/root.jsx',
          indexJs:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz/app/index.jsx',
          indexHtml:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz/app/index.html',
          db:
            '/Users/qingyudeng/projects/my-gatsby-site-with-docz/.docz/app/db.json',
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-vscode', options: {} }],
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
