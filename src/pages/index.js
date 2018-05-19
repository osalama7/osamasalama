import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Profile from '../components/profile';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Typography from 'material-ui/Typography';
const styles = theme => ({
	root: {
		flexGrow: 1,
		alignItems: 'stretch',
		spacing: 24
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
});
class RootIndex extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const [author] = get(this, 'props.data.allContentfulPerson.edges');

      return (
				<div className={styles.root}>

					<Grid container className={styles.root}>
						<Grid item xs={12}>
							<Typography variant="body2" color="secondary">
								<Paper className={styles.paper}>{author.node.name}</Paper>
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="body2" color="secondary">
								<Paper className={styles.paper}>{author.node.website}</Paper>
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="body2" color="secondary">
							<Paper className={styles.paper}>{author.node.yearsOfExperience}</Paper>
							</Typography>
						</Grid>
						<Grid item xs={12}>
						</Grid>
					</Grid>
					<Profile person={author} />
				</div>

      )
  }
}
RootIndex.propTypes = {
	classes: PropTypes.object.isRequired,
};
{/*<div style={{ background: '#fff' }}>*/}
    {/*<Helmet title={siteTitle} />*/}
    {/*<Hero person={author} />*/}
    {/*<div className="wrapper">*/}
        {/*<h2 className="section-headline">Recent articles</h2>*/}
        {/*<ul className="article-list">*/}
            {/*{posts.map(({ node }) => {*/}
                {/*return (*/}
                    {/*<li key={node.slug}>*/}
                        {/*<ArticlePreview article={node} />*/}
                    {/*</li>*/}
                {/*)*/}
            {/*})}*/}
        {/*</ul>*/}
    {/*</div>*/}
{/*</div>*/}
export default withStyles(styles)(RootIndex);

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          yearsOfExperience
          website
          shortBio {
            shortBio
          }
          skills {
            itemList {
              name
              years
              icon
            }
          }
          education {
						itemList {
							name
							yearTo
							yearFrom
						}
					}
					experience {
						itemList {
							name
							company
							yearTo
							yearFrom
						}
					}
          title
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
