import React from 'react';
import {Spin} from 'antd';
import styled from 'styled-components';

const IsLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading: React.FC = () => {
  return (
    <IsLoading><Spin size="large"/></IsLoading>
  );
};

export default Loading;