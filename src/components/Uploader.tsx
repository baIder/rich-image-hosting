import React from 'react';
import {useStores} from '../stores';
import {message, Upload} from 'antd';
import type {UploadProps} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import {observer} from 'mobx-react';

const {Dragger} = Upload;

const Uploader: React.FC = () => {
  const {ImageStore} = useStores();
  const props: UploadProps = {
    name: 'file',
    showUploadList: false,
    beforeUpload(file) {
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      ImageStore.upload()
        .then(serverFile => {
          message.success('上传成功').then();
          console.log(serverFile);
        })
        .catch(() => message.error('上传失败').then())
      ;
      return false;
    }
  };


  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
      <div>
        <h1>上传结果</h1>
        {
          ImageStore.serverFile ? <div>{ImageStore.serverFile.attributes.url.attributes.url}</div> : null
        }
      </div>
    </>
  );
};

export default observer(Uploader);