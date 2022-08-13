import {observer} from 'mobx-react';
import {useStores} from '../stores';
import Uploader from '../components/Uploader';
import React from 'react';

const Home: React.FC = () => {
  const {UserStore} = useStores();
  return (
    <>
      <h1>{UserStore.currentUser ? <>Hello {UserStore.currentUser}</> : '请登录'}</h1>
      <Uploader/>
    </>
  );
};

export default observer(Home);

