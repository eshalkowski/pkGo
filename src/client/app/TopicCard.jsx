import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class TopicCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Card>
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