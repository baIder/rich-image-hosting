import React from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../stores';
import styled from 'styled-components';

type TipsProps = {
  children: React.ReactNode;
};

const TipsDiv = styled.div`
  background: orange;
  padding: 10px;
  margin: 30px 0;
  color: white;
  border-radius: 4px;
`;

const Tips = ({children}: TipsProps) => {
  const {UserStore} = useStores();
  return (
    <>
      {UserStore.currentUser ? null : <TipsDiv>{children}</TipsDiv>}
    </>

  );
};

export default observer(Tips);