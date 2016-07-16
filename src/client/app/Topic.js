import { observable } from 'mobx';

class Topic {
    @observable name;
    @observable starDate;
    @observable userName
    @observable description;

    constructor(name, startDate, userName, description){
      this.name = name;
      this.startDate = startDate;
      this.userName = userName;
      this.description = description;
    }
}

export default Topic;