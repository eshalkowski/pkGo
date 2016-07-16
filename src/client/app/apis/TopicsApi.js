import $ from 'jquery'; 

class TopicListApi {
  getTopics(){
    return $.getJSON('http://pokeapi.co/api/v2/pokemon/3')
    .then(function(data) {
      console.log(data);
      return data;
    });  
  }
}

export default new TopicListApi();