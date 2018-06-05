import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import { GithubCircle, LinkedinBox, TwitterBox, StackOverflow } from 'mdi-material-ui/';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const styles = {
	root: {
		margin: '5px',
		paddingTop: '4em',
		paddingBottom: '10px'

	},
};

class ProfileBottomNavigation extends React.Component {
	state = {
		value: 1,
	};


	render() {
		const { classes } = this.props;
		return (
				<div className={classes.root}>
					<Grid container layout="column" spacing={16}>
						<BottomNavigation
								showLabels
								className={classes.root}
						>
							<OutboundLink>
								<BottomNavigationAction label="github"
																				href={this.props.person.node.socialLinks.itemList[0].name}
																				icon={<GithubCircle />}
																					/>
							</OutboundLink>
							<OutboundLink>
								<BottomNavigationAction label="Twitter"
																				href={this.props.person.node.socialLinks.itemList[1].name}
																				icon={<TwitterBox />}
								/>
							</OutboundLink>
							<OutboundLink>
								<BottomNavigationAction label="stackoverflow"
																				href={this.props.person.node.socialLinks.itemList[2].name}
																				icon={<StackOverflow />}
								/>
							</OutboundLink>
							<OutboundLink>
								<BottomNavigationAction label="linkedIn"
																				href={this.props.person.node.socialLinks.itemList[3].name}
																				icon={<LinkedinBox />}
								/>
							</OutboundLink>
						</BottomNavigation>
					</Grid>
				</div>
		);
	}
}

ProfileBottomNavigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileBottomNavigation);
