import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import Config from '../../config.json';

const styles = {
    root: {
        flexGrow: 5,
				alignItems: 'stretch',
				padding: '0px',
				margin: '0px',
    },
    flex: {
        flex: 1,
				flow: 'row'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
		avatar: {
			padding: '10px'
		},
    bigAvatar: {
        width: 60,
        height: 60,
        row: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    },
};

function ProfileAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
					<AppBar position="static" color={'secondary'}>
						<Toolbar>
							<IconButton className={classes.menuButton}
													color="inherit"
							>
								<Avatar
								alt="Software Engineer"
								src="https://png.icons8.com/ios/50/ffffff/source-code-filled.png"
								className={classes.avatar}
								/>
							</IconButton>
							<Typography variant="title" color="inherit" className={classes.flex}>
							</Typography>
								<div>

									<IconButton
											aria-label="contact me"
											href={Config.siteMetadata.email}
											aria-haspopup="true"
											color="primary"
									>
										{/*TODO fix aligning contact message*/}
									{/*<Typography variant="body2" color="inherit" className={classes.flex}>*/}
										{/*Contact*/}
									{/*</Typography>*/}
									<ContactMailIcon className={classes.icon} />
									</IconButton>
								</div>
						</Toolbar>
					</AppBar>
        </div>
    );
}

ProfileAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileAppBar);
