import {makeAutoObservable} from 'mobx';

type User = {
  username: string,
  password: string
}

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  isLogin: boolean = false;
  isLoading: boolean = false;
  values: User = {
    username: '',
    password: '',
  };

  setIsLogin = (isLogin: boolean) => {
    this.isLogin = isLogin;
  };

  setUsername = (username: string) => {
    this.values.username = username;
  };

  setPassword = (password: string) => {
    this.values.password = password;
  };

  login = () => {
    console.log('登录中...');
    this.isLoading = true;
    setTimeout(() => {
      console.log('登录成功');
      this.isLogin = true;
      this.isLoading = false;
    }, 1000);
  };

  register = () => {
    console.log('注册中...');
    this.isLoading = true;
    setTimeout(() => {
      console.log('注册成功');
      this.isLogin = true;
      this.isLoading = false;
    }, 1000);
  };

  logout = () => {
    console.log('已注销');
  };
}

export default AuthStore;