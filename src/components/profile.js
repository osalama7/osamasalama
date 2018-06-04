import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import Grow from '@material-ui/core/Grow';
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
		border: '0.5em',
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
		return (
			<div className={classes.root}>
				<Grow in={true} timeout={500}>
					<Grid container layout="column" spacing={16}>
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
				</Grow>
			</div>
		);
	}
}

SkillsArray.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsArray);
