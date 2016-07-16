import { observable } from 'mobx';

class TopicList {
    @observable topics = [];

    constructor() {

    }

    load(){

    }

    addTopic(){
        topics.push({});
    }
}

export default TopicList;