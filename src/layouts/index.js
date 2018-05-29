import React from 'react';
import base from './base.css';
import Container from '../components/container';
import Navigation from '../components/navigation';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CssBaseline from 'material-ui/CssBaseline';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// blueGrey900
import { createMuiTheme } from 'material-ui/styles';
const theme = createMuiTheme({
    palette: {
				type: 'dark',
				background: '#005958',
        primary: {
            light: '#89b5c6',
            main: '#005958',
            dark: '#002884',
						text: '#89b5c6',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#89b5c6',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});


class Template extends React.Component {
  render() {

    const { location, children } = this.props;
    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <MuiThemeProvider theme={theme}>

        <Container className="index-container">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <AppBar
                title="Title"
            />
            <Navigation />
            {children()}
        </Container>
      </MuiThemeProvider>

    );
  }
}

export default Template;
