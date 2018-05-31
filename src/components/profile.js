import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';


const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: theme.spacing.unit / 2,
		paddingBottom: '1em',
		paddingTop: '2em',
	},
	chip: {
		margin: '5px',
		avatar: {
			padding: '1em'
		}
	},
});

class SkillsArray extends React.Component {
	state = {
		chipData: this.props.person.node.skills.itemList
	};

	render() {
		const transitionDuration = {
			enter: 700,
			exit: 300,
		};
		const { classes } = this.props;
		return (
			<Chip
					key={0}
					avatar={<Avatar className={classes.chip.avatar} src="//images.ctfassets.net/w3b3hu5yk7y7/10keK4LITkY4egq4USeay4/e2816001f4c07c79f4fadc551db4116c/icons8-github-64.png"/>}
					label={this.props.person.node.skills.itemList[0].name}
					className={classes.chip}
			/>
		);
	}
}

SkillsArray.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsArray);
