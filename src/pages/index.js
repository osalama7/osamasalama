import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Hero from '../components/profile';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


const styles =  {
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '12',
        textAlign: 'center',
        color: '#ffffff',
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: '1' +
        '',
    },
};

class RootIndex extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');

    const [author] = get(this, 'props.data.allContentfulPerson.edges');
    console.log({author});
      return (
          <div className={styles.root}>
              <Hero person={author} />
              <Grid container spacing={24}>
                  <Grid item xs={12}>
                      <Paper className={styles.paper}>A versatile software engineer exercising an effective brand of solution-oriented problem solving. Professionally experienced in building web platforms utilising the latest technologies in web development, Building secure, maintainable, reusable, and optimum performance software components. Adept in multiple open source programming languages and platforms, with a special interest in complex computing problems. Looking to join a team of engineers, within a growing and innovative organisation building mission driven, innovative team
                      </Paper>
                  </Grid>
                  <Grid item xs>
                      <Paper className={styles.paper}>xs</Paper>
                  </Grid>
                  <Grid item xs>
                      <Paper className={styles.paper}>{author.node.name}</Paper>
                  </Grid>
              </Grid>
              <Grid container spacing={24}>
                  <Grid item xs>
                      <Paper className={styles.paper}>xs</Paper>
                  </Grid>
                  <Grid item xs={6}>
                      <Paper className={styles.paper}>xs=6</Paper>
                  </Grid>
                  <Grid item xs>
                      <Paper className={styles.paper}>xs</Paper>
                  </Grid>
              </Grid>
          </div>
      )
  }
}

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
export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
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
