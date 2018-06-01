const config = require('./config.json');
const contentfulConfig = {
	"development": config.contentfulConfig.development,
	"production": config.contentfulConfig.production
};
module.exports = {
  pathPrefix: '/osamasalama',
	siteMetadata: {
		siteUrl: config.siteMetadata.siteUrl,
		rssMetadata: {
			site_url: config.siteMetadata.rssMetadata.site_url,
			title: config.siteMetadata.rssMetadata.title,
			description: config.siteMetadata.rssMetadata.description,
			author: config.siteMetadata.rssMetadata.author,
			copyright: config.siteMetadata.rssMetadata.copyright,
		}
	},
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-jss',
		'gatsby-plugin-sass',
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: config.googleAnalytics.trackingId
			}
		},
		{
			resolve: `gatsby-plugin-sitemap`
		},
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
				config.contentfulConfig.development :
					config.contentfulConfig.production
    },
  ],
};
