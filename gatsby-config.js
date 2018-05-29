const contentfulConfig = require('./.contentful');

module.exports = {
  pathPrefix: '/gatsby-contentful-starter_osama-salama-profile',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
        contentfulConfig.development :
        contentfulConfig.production
    },
  ],
}
