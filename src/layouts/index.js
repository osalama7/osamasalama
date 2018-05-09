import React from 'react';
import Link from 'gatsby-link';
import base from './base.css';
import Container from '../components/container';
import Navigation from '../components/navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// blueGrey900

class Template extends React.Component {
  render() {

    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
        <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
          <Container>
              <AppBar
                  title="Title"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
            <Navigation />

            {children()}
          </Container>
        </MuiThemeProvider>
    )
  }
}

export default Template
