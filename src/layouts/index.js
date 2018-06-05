import React from 'react';
	import base from './base.css';
import Container from '../components/container';
import Navigation from '../components/navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import getPageContext from '../get-page-context';
import Helmet from 'react-helmet';
const theme = createMuiTheme({
	palette: {
		type: 'light',
		backgroundColor: '#fffefd',
		primary: {
			light: '#89b5c6',
			main: '#3d5565',
			dark: '#003736',
			text: '#5f0600',
			contrastText: '#fff',
		},
		secondary: {
			light: '#89b5c6',
			main: '#89b5c6',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});


class Template extends React.Component {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#server-side-jss');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	};
  render() {

    const { location, children } = this.props;
    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
		this.pageContext = getPageContext();


    return (

			<MuiThemeProvider
					theme={theme}
					sheetsManager={this.pageContext.sheetsManager}>
				<Helmet defaultTitle={`Osama Salama`} titleTemplate={`%s | Osama Salama`}>
					<meta name="twitter:site" content="@osama_salama" />
					<meta name="og:type" content="website" />
					<meta name="og:site_name" content="Osama Salama" />
					<link
							rel="canonical"
							href={`https://www.osamasalama.xyz/`}
					/>
					<html lang="en" />
				</Helmet>
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
