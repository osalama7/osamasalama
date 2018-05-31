import React from 'react';
	import base from './base.css';
import Container from '../components/container';
import Navigation from '../components/navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// blueGrey900

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		backgroundColor: '#005958',
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
					<AppBar
							title="Title"
					/>
					<Navigation />
					{children()}
				</Container>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
			</MuiThemeProvider>
    );
  }
}

export default Template;
