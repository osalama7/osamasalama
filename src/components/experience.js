import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`,
	},
	wrapper: {
		maxWidth: 400,
	},
	paper: {
		margin: theme.spacing.unit,
		padding: theme.spacing.unit * 2,
	},
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	}
});

class ExperienceList extends React.Component {


	render() {
		const { classes } = this.props;
		console.log('emplate');
		console.log(this.props);

		const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;
		const bull = <span className={classes.bullet}>•</span>;
		return (
				<div className={classes.root}>
					<div className={classes.wrapper}>
						<Typography variant="body2" color="secondary">
							<p>Education</p>
						</Typography>
						<Paper className={classes.paper}>
							{this.props.person.education.itemList.map(data => {
								return (
									<Grid container wrap="column" spacing={16}>
										<Card className={classes.card}>
											<CardContent>
												<Typography>{data.name}</Typography>
												<Typography>{data.yearFrom}</Typography>
												<Typography>{data.yearTo}</Typography>
											</CardContent>
										</Card>
									</Grid>
								);
							})}
							{this.props.person.experience.itemList.map(data => {
								return (
										<Grid container wrap="column" spacing={16}>
											<Grid container wrap="column" spacing={16}>
												<Card className={classes.card}>
													<CardContent>
														<Typography>{data.name}</Typography>
														<Typography>{data.yearFrom}</Typography>
														<Typography>{data.yearTo}</Typography>
													</CardContent>
													<CardActions>
														<Button size="small">Learn More</Button>
													</CardActions>
												</Card>
											</Grid>
										</Grid>
								);
							})}
						</Paper>

					</div>
				</div>
		);
	}
}

ExperienceList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperienceList);

export const expQuery = graphql`
  query ExpQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          yearsOfExperience
          website
          shortBio {
            shortBio
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