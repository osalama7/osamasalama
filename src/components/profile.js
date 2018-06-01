import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import ReactIcon from 'mdi-material-ui/React';
import { Nodejs, LanguageJavascript, Docker, Angular, LanguageHtml5, LanguagePhp, LanguageCpp, Ninja, Database, Npm, Console } from 'mdi-material-ui/';

const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		direction: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
		flexGrow: 1,
		padding: '0.5em',
		margin: '0.5em',
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
		console.log(this.props.person.node.skills.itemList);
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container layout="column" spacing={16}>
					<Grid item xs>
						<Chip
								avatar={<Ninja />}
								label={'Ninja'}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<LanguageJavascript />}
								label={this.props.person.node.skills.itemList[0].name}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<Nodejs />}
								label={this.props.person.node.skills.itemList[1].name}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<Npm />}
								label={this.props.person.node.skills.itemList[5].name}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<Angular />}
								label={this.props.person.node.skills.itemList[8].name}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<Docker />}
								label={this.props.person.node.skills.itemList[18].name}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<LanguageHtml5 />}
								label={'HTML'}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<LanguageCpp />}
								label={'C++'}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<LanguagePhp />}
								label={'PHP'}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<Database />}
								label={'Databases'}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<Console />}
								label={'Bash'}
								className={classes.chip}
						/>
					</Grid>
					<Grid item xs>
						<Chip
								avatar={<ReactIcon />}
								label={'React'}
								className={classes.chip}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

SkillsArray.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsArray);
