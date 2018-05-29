const contentfulConfig = require('./.contentful');

module.exports = {
  pathPrefix: '/osamasalama',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
        contentfulConfig.development :
        contentfulConfig.production
    },
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-120007367-1",
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: [""],
			},
		},
  ],
}
