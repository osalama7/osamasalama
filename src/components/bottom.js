import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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
							<BottomNavigationAction label="github"
																			href={this.props.person.node.socialLinks.itemList[0].name}
																				icon={<Avatar src={"//images.ctfassets.net/w3b3hu5yk7y7/10keK4LITkY4egq4USeay4/e2816001f4c07c79f4fadc551db4116c/icons8-github-64.png"} />}
																				/>
							<BottomNavigationAction label="Twitter"
																			href={this.props.person.node.socialLinks.itemList[1].name}
																			icon={<Avatar src={"//images.ctfassets.net/w3b3hu5yk7y7/35a4SzII1GimEymgyWOgme/861ebaa8c144b6c0240b844d6174b99a/icons8-twitter-50.png"} />}
							/>
							<BottomNavigationAction label="stackoverflow"
																			href={this.props.person.node.socialLinks.itemList[2].name}
																			icon={<Avatar src={"//images.ctfassets.net/w3b3hu5yk7y7/2ROuGyg6L66yIyqS2YYqqQ/deac414eae686496f3a12481d292a5ec/icons8-stack-overflow-50.png"} />}
							/>
							<BottomNavigationAction label="linkedIn"
																			href={this.props.person.node.socialLinks.itemList[3].name}
																			icon={<Avatar src={"//images.ctfassets.net/w3b3hu5yk7y7/35a4SzII1GimEymgyWOgme/30df543e69cb0660128e08ed16b5f91b/icons8-linkedin-filled-50.png"} />}
							/>
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
