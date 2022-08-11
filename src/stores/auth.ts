import {action, observable} from 'mobx';

class AuthStore {
  @observable isLogin = false;
  @observable isLoading = false;
  @observable values = {
    username: '',
    password: '',
  };

  @action setIsLogin(isLogin: boolean) {
    this.isLogin = isLogin;
  };

  @action setUsername(username: string) {
    this.values.username = username;
  };

  @action setPassword(password: string) {
    this.values.password = password;
  };

  @action login() {
    console.log('登录中...');
    this.isLoading = true;
    setTimeout(() => {
      console.log('登录成功');
      this.isLogin = true;
      this.isLoading = false;
    }, 1000);
  }

  @action register() {
    console.log('注册中...');
    this.isLoading = true;
    setTimeout(() => {
      console.log('注册成功');
      this.isLogin = true;
      this.isLoading = false;
    }, 1000);
  }

  @action logout() {
    console.log('已注销');
  }
}

export default AuthStore;