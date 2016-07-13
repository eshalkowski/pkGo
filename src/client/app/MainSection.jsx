import React from 'react';
import TopicCard from './TopicCard.jsx';

class MainSection extends React.Component {

  constructor(props) {
    super(props);
    this.topics = [
      {
        name: 'Strategy',
        starDate: '07/11/16',
        userName: 'SirUrlich',
        description: 'Lets Talk Strategy',
        posts:[
          {
            userName: 'Charles',
            text: 'Catch all pokemon and trade in for candy.',
            timestamp: '7:55pm'
          }
        ]
      },
      {
        name: 'Awesome Catches',
        starDate: '07/11/16',
        userName: 'SirUrlich',
        description: 'Lets Talk Strategy',
        posts:[
          {
            userName: 'Charles',
            text: 'I Caught a Jigglypuff with your Squirtle',
            timestamp: '7:55pm'
          }
        ]
      },
      {
        name: 'Strategy',
        starDate: '07/11/16',
        userName: 'SirUrlich',
        description: 'Lets Talk Strategy',
        posts:[
          {
            userName: 'Charles',
            text: 'Catch all pokemon and trade in for candy.',
            timestamp: '7:55pm'
          }
        ]
      },
      {
        name: 'Strategy',
        starDate: '07/11/16',
        userName: 'SirUrlich',
        description: 'Lets Talk Strategy',
        posts:[
          {
            userName: 'Charles',
            text: 'Catch all pokemon and trade in for candy.',
            timestamp: '7:55pm'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div>
        { this.topics.map(function(topic){
          return <div style={{width:300, height:400, float:'left', margin:5}}><TopicCard topic={topic} /></div>;
          
        })
          
        }
      </div>
    );
  }

}

export default MainSection;