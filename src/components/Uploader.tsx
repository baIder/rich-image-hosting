import React, {useRef} from 'react';
import {useStores} from '../stores';
import {message, Upload} from 'antd';
import type {UploadProps} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import {observer} from 'mobx-react';


const {Dragger} = Upload;
const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const {status} = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
  beforeUpload() {
    return false;
  }
};

const Uploader: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const {ImageStore} = useStores();
  const bindChange = () => {
    if (ref.current && ref.current.files && ref.current.files.length > 0) {
      ImageStore.setFile(ref.current.files[0]);
      ImageStore.setFilename(ref.current.files[0].name);
      ImageStore.upload()
        .then((serverFile) => {
          message.success('上传成功').then();
          console.log(serverFile);
        })
        .catch(() => message.error('上传失败').then())
      ;
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
    </>
  );
};

export default observer(Uploader);