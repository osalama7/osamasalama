import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Profile from '../components/profile';
import LocationIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import BottomNav from '../components/bottom';
import Chip from '@material-ui/core/Chip';
const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		margin: 10,
	},
	root: {
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`,
		flexGrow: 1,
	},
	wrapper: {
		maxWidth: 400,
	},
	icon: {
		margin: theme.spacing.unit * 2,
	},
	iconHover: {
		margin: theme.spacing.unit * 2,
	},
	row: {
		display: 'flex',
		justifyContent: 'center',
	},
	avatar: {
		marginTop: 100,
	},
	bigAvatar: {
		width: 120,
		height: 120,
	},

	spacing: '40'
});
class RootIndex extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const [cv] = get(this, 'props.data.allContentfulPerson.edges');
		const { classes } = this.props;
      return (
				<div>
					<div className={classes.row}>
						<Avatar
								alt="Osama Salama"
								src="//images.ctfassets.net/w3b3hu5yk7y7/3oumRn3KyskQaWKiCa4YAk/02b263ec573e78b8e2971e67911be5b7/profile.png"
								className={classNames(classes.avatar, classes.bigAvatar)}
						/>
					</div>
					<Chip
							key={0}
							label={'hello'}
							className={classes.chip}
							avatar={<Avatar src="//images.ctfassets.net/w3b3hu5yk7y7/10keK4LITkY4egq4USeay4/e2816001f4c07c79f4fadc551db4116c/icons8-github-64.png" />}
					/>
					<div className={classes.row}>
						<div className={classes.wrapper}>
							<Paper className={classes.paper} elevation={0}>
								<Grid container wrap="nowrap" spacing={8}>
									<Grid item xs zeroMinWidth>
										<Typography variant="headline" color="secondary">
											{cv.node.name}
										</Typography>
										<Typography variant="body2" color="secondary">
											{cv.node.title}
										</Typography>
										<Grid item>
											<Typography variant="body2" color="secondary">
												{cv.node.shortBio.shortBio}
											</Typography>
										</Grid>
										<Grid item>
											<LocationIcon className={classes.icon} />
										</Grid>
										<Typography variant="body2" color="secondary">
											{'Berlin, Germany'}
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						</div>
					</div>
					<Profile person={cv} />
					<div className={classes.row}>
						<BottomNav person={cv} />
					</div>
				</div>
      )
  }
}
RootIndex.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RootIndex);

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          yearsOfExperience
          gh {
            file {
              url
              fileName
              contentType
            }
          }
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
          socialLinks {
            itemList {
              name
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
