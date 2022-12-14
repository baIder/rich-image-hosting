import React from 'react';
import {useStores} from '../stores';
import {message, Upload, Input, Space, Spin} from 'antd';
import type {UploadProps} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import {observer, useLocalObservable} from 'mobx-react';
import styled from 'styled-components';

const {Dragger} = Upload;

const Result = styled.div`
  margin-top: 10px;
  border: 1px dashed #ccc;
  padding: 20px;
`;

const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

const Image = styled.img`
  max-width: 300px;
`;

const Uploader: React.FC = () => {
  const {ImageStore, UserStore} = useStores();
  const store = useLocalObservable(() => ({
    width: '',
    height: '',
    setWidth(width: string) {
      store.width = width;
    },
    setHeight(height: string) {
      store.height = height;
    },
    get widthStr() {
      return store.width === '' ? '' : `/w/${store.width}`;
    },
    get heightStr() {
      return store.height === '' ? '' : `/h/${store.height}`;
    },
    get fullStr() {
      return ImageStore?.serverFile?.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr;
    }
  }));
  const changeWidth = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    store.setWidth(e.target.value);
  };
  const changeHeight = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    store.setHeight(e.target.value);
  };
  const props: UploadProps = {
    name: 'file',
    showUploadList: false,
    beforeUpload(file) {
      if (UserStore.currentUser === '') {
        message.warning('请先登录再上传！').then();
        return false;
      }
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
        message.error('只能上传png/svg/jpg/jpeg/gif格式的图片').then();
        return false;
      }
      if (file.size > 1024 * 1024) {
        message.error('仅支持上传小于1MB的图片').then();
        return false;
      }
      ImageStore.upload()
        .then(() => {
          message.success('上传成功').then();
        })
        .catch(() => message.error('上传失败').then());
      return false;
    },
  };

  return (
    <>
      <Spin tip="上传中" spinning={ImageStore.isUploading}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined accept=".png"/>
          </p>
          <p className="ant-upload-text">
            点击或将文件拖拽至此处以上传
          </p>
          <p className="ant-upload-hint">
            仅支持png/svg/jpg/jpeg/gif格式的图片，最大不超过1MB
          </p>
        </Dragger>
      </Spin>
      {
        ImageStore.serverFile && ImageStore.serverFile.attributes.filename ? <Result>
          <H1>上传结果</H1>
          <dl>
            <dt>图片地址：</dt>
            <dd><a target="_blank"
                   href={ImageStore.serverFile.attributes.url.attributes.url}
                   rel="noreferrer">{ImageStore.serverFile.attributes.url.attributes.url}</a>
            </dd>
            <dt>文件名：</dt>
            <dd>{ImageStore.filename}</dd>
            <dt>图片预览：</dt>
            <dd>
              <Image src={ImageStore.serverFile.attributes.url.attributes.url} alt=""/>
            </dd>
            <dt>自定义尺寸：</dt>
            <dd>
              <Space direction="horizontal">
                <Input addonBefore="宽度" addonAfter="px" placeholder="输入自定义的宽度（可选）" allowClear
                       onChange={changeWidth}/>
                <Input addonBefore="高度" addonAfter="px" placeholder="输入自定义的高度（可选）" allowClear onChange={changeHeight}/>
              </Space>
            </dd>
            <dt>处理后的图片地址：</dt>
            <dd><a target="_blank" href={store.fullStr} rel="noreferrer">{store.fullStr}</a></dd>
          </dl>
        </Result> : null
      }
    </>
  );
};

export default observer(Uploader);