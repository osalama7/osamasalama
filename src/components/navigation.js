// import React from 'react';
// import Link from 'gatsby-link';
//
// export default () => (
//   <nav role="navigation">
//
//     <ul className={styles.navigation}>
//       <li className={styles.navigationItem}>
//         <Link to="/">Home</Link>
//       </li>
//       <li className={styles.navigationItem}>
//         <Link to="/blog/">Blog</Link>
//       </li>
//     </ul>
//   </nav>
// )
import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
const styles = {
    root: {
        flexGrow: 2,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
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
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="title" color="secondary">
                    Osama Salama
                    </Typography>'
                    <div>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >

                        </IconButton>
                    </div>
                    <Avatar alt="Remy Sharp" src="/static/profile_icon.jpg" className={classes.bigAvatar} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

ProfileAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileAppBar);
