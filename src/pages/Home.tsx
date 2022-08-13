import {observer} from 'mobx-react';
import {useStores} from '../stores';

function Home() {
  const {UserStore} = useStores();
  return (
    <>
      <h1>{UserStore.currentUser ? <>Hello {UserStore.currentUser}</> : '请登录'}</h1>
    </>
  );
}

export default observer(Home);

