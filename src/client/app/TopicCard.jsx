import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class TopicCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Card className="topicCard">
          <CardHeader
            title={this.props.topic.name}
            subtitle={this.props.topic.description}
            actAsExpander={false}
            showExpandableButton={false}
            />
            
          <CardText expandable={false}>
           {this.props.topic.posts[0].text}
          </CardText>

          <CardActions expandable={true}>
            <FlatButton label="Comment" />
          </CardActions>
        </Card>
    )
  }

}

export default TopicCard;