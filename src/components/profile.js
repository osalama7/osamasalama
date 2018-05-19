import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Experience from './experience';

const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: theme.spacing.unit / 2,
	},
	chip: {
		margin: theme.spacing.unit / 2,
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
		console.log(this.props.person.node);
		return (
			<Paper>
				<Experience person={this.props.person.node} />

				<Paper className={classes.root} square={false}>

					{this.state.chipData.map(data => {

						let index = null;
						index = this.props.person.node.skills.itemList.indexOf(data);
						return (
								<Chip
										key={index}
										avatar={<Avatar className={classes.chip.avatar} src={data.icon}/>}
										label={data.name}
										className={classes.chip}
								/>
						);
					})}
				</Paper>
			</Paper>


		);
	}
}

SkillsArray.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsArray);

export const pageQuery = graphql`
  query ProfileQuery {
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
          education {
						itemList {
							name
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
