import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import TopicsApi from './apis/TopicsApi.js'; 

class TopicCard extends React.Component {

  constructor(props) {
    super(props);
  }

  handleTopicClick(){
    TopicsApi.getTopics();
    alert('testClick');
  }
  render() {
    return (
      <Paper style={{padding: '5px 0'}} onClick={this.handleTopicClick}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{margin: 5}}>{this.props.topic.name}</h3>
        </div>
        <div style={{ color: '#AAA', textAlign: 'center' }}>
          {this.props.topic.description}
        </div>
        <div style={{ fontSize: 12, padding: '5px 5px 0px 5px', textAlign:'right'}}>
         
        </div>
        <Paper style={{ padding: 15, margin: 5}}>
          <div style={{marginBottom: 5, display:'flex'}}>
           <Avatar style={{margin: '0 5px 0 0 '}} src="http://orig07.deviantart.net/f8f6/f/2016/149/3/1/jigglypuff_by_crystal_ribbon-da48ylv.png" backgroundColor='clear' />
            <div style={{display:'flex', flexDirection:'column', paddingTop: 5}}>
              <div style={{flex: .5}}>{this.props.topic.posts[0].userName}</div>
              <div style={{flex: .5, color: '#AAA', fontSize: 12}}>member since 07/13/2016</div>
            </div>
          </div>
          <div style = {{padding:10}}>
            {this.props.topic.posts[0].text}
          </div>
        </Paper>
      </Paper>
    )
  }

}

export default TopicCard;