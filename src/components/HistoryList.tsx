import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../stores';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Divider, List, Spin} from 'antd';
import AV from 'leancloud-storage';
import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
  height: 120px;
  object-fit: contain;
  border: 1px solid #eee;
`;

const HistoryList: React.FC = () => {
  const {HistoryStore} = useStores();
  const loadMoreData = () => {
    HistoryStore.find();
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    console.log('组件加载');
    return () => {
      console.log('组件卸载');
      HistoryStore.reset();
    };
  }, []);

  return (
    <>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={HistoryStore.list.length}
          next={loadMoreData}
          hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
          loader={<Spin/>}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          {/*@ts-ignore*/}
          <List dataSource={HistoryStore.list} renderItem={(item: AV.Object) => (<List.Item key={item.id}>
            <Img src={item.attributes.url.attributes.url} alt=""/>
            <h5>{item.attributes.filename}</h5>
            <a target="_blank" href={item.attributes.url.attributes.url}
               rel="noreferrer">{item.attributes.url.attributes.url}</a>
          </List.Item>)}/>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default observer(HistoryList);