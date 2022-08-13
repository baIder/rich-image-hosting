import {makeAutoObservable} from 'mobx';
import {Auth} from '../models';

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentUser: string = '';

  pullUser() {
    this.currentUser = Auth.getCurrentUser().getUsername();
  }

  resetUser() {
    this.currentUser = '';
  }

}

export default new UserStore();