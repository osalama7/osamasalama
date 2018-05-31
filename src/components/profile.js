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
		const { classes } = this.props;
		const transitionDuration = {
			enter: 700,
			exit: 300,
		};
		return (
			<div>
				<Paper className={classes.root} square={false} elevation={0}>
					{this.state.chipData.map(data => {
						let index = null;
						index = this.props.person.node.skills.itemList.indexOf(data);
						return (
							<Zoom
									in={true}
									timeout={transitionDuration}
										style={{
											transitionDelay: this.state.value === index ? transitionDuration.exit : 0,
										}}
										unmountOnExit>
								<Chip
										key={index}
										avatar={<Avatar className={classes.chip.avatar} src={data.icon}/>}
										label={data.name}
										className={classes.chip}
								/>
							</Zoom>
						);
					}, 1100)}
				</Paper>
			</div>
		);
	}
}

SkillsArray.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsArray);
