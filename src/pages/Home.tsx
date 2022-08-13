import {observer} from 'mobx-react';
import Uploader from '../components/Uploader';
import React from 'react';
import Tips from '../components/Tips';

const Home: React.FC = () => {
  return (
    <>
      <Tips>请登录后再进行上传！</Tips>
      <Uploader/>
    </>
  );
};

export default observer(Home);

