import {makeAutoObservable} from 'mobx';
import Auth from '../models';

type User = {
  username: string,
  password: string
}

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
        console.log('登录成功');
        resolve(user);
      }).catch(error => {
        console.log('登录失败');
        reject(error);
      });
    });
  };

  register = () => {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password).then(user => {
        console.log('注册成功');
        resolve(user);
      }).catch(error => {
        console.log('注册失败');
        reject(error);
      });
    })
  };

  logout = () => {
    Auth.logout();
  };
}

export default AuthStore;