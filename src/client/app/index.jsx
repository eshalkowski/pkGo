import React from 'react';
import {render} from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainSection from './MainSection.jsx'
import Avatar from 'material-ui/Avatar';

import AwesomeComponent from './AwesomeComponent.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    injectTapEventPlugin();
  }
 
  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme) }>
      <div>
        <AppBar title="pkValor"
                iconElementLeft={<Avatar style={{margin: '0 5px 0 0 '}} src="images/Valor.jpg" backgroundColor='clear'/>}
                iconElementRight={<AwesomeComponent />} />
        <MainSection />
        </div>
      </MuiThemeProvider>
      
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));