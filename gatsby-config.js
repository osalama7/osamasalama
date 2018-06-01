const contentfulConfig = {
	"development": {
		"host": "preview.contentful.com",
		"spaceId": "w3b3hu5yk7y7",
		"accessToken": "bc6249a9596591cfe1595cfe4f4c405b746b60ddcfaa40b64a3544a0ea4ee420"
	},
	"production": {
		"spaceId": "w3b3hu5yk7y7",
		"accessToken": "d4bafdc3e36e3991b9e2fbdefd1dfa1cf48d785657954a828ee6270cd65ddefa"
	}
};

module.exports = {
  pathPrefix: '/osamasalama',
	siteMetadata: {
		siteUrl: 'www.osamasalama.xyz',
		rssMetadata: {
			site_url: 'www.osamasalama.xyz',
			title: 'Osama Salama Profile',
			description: 'let\'s talk ?',
			author: 'Osama Salama',
			copyright: 'copywrite add here',
		}
	},
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
		'gatsby-plugin-jss',
		'gatsby-plugin-sass',
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-120215217-1"
			}
		},
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
        contentfulConfig.development :
        contentfulConfig.production
    },
  ],
};
