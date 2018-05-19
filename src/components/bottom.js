import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
const styles = {
	root: {
		width: 500,
		layout: 'column'
	},
};

class ProfileBottomNavigation extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
				<div>
					<Grid container layout="column" spacing={16}>
						<BottomNavigation
								value={value}
								onChange={this.handleChange}
								showLabels
								className={classes.root}
						>
							<BottomNavigationAction label="Github" icon={<RestoreIcon />} />
							<BottomNavigationAction label="Stackoverflow" icon={<FavoriteIcon />} />
							<BottomNavigationAction label="Twitter" icon={<LocationOnIcon />} />
							<BottomNavigationAction label="LinkedIn" icon={<LocationOnIcon />} />
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
