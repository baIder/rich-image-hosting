import {makeAutoObservable} from 'mobx';
import Auth from '../models';
import UserStore from './user';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  values: User = {
    username: '',
    password: '',
  };

  setUsername = (username: string) => {
    this.values.username = username;
  };

  setPassword = (password: string) => {
    this.values.password = password;
  };

  login = () => {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password).then(user => {
        UserStore.pullUser();
        resolve(user);
      }).catch(error => {
        UserStore.resetUser();
        reject(error);
      });
    });
  };

  register = () => {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password).then(user => {
        UserStore.pullUser();
        resolve(user);
      }).catch(error => {
        UserStore.resetUser();
        reject(error);
      });
    });
  };

  logout = () => {
    Auth.logout();
    UserStore.resetUser();
  };
}

export default new AuthStore();