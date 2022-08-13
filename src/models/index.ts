import AV, {User} from 'leancloud-storage';

AV.init({
  appId: '7hkeYtTreLVRGjcXcuF7wbfd-gzGzoHsz',
  appKey: '8Tr1Jps7rSzibdtIFGn9LfaB',
  serverURL: 'https://7hkeyttr.lc-cn-n1-shared.com'
});

const Auth = {
  register(username: string, password: string) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error));
    });
  },
  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then((loginedUser) => resolve(loginedUser), error => reject(error));
    });
  },
  logout() {
    User.logOut().then();
  },
  getCurrentUser() {
    return User.current();
  }
};

export default Auth;