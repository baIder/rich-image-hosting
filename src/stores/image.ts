import {makeAutoObservable} from 'mobx';
import {Uploader} from '../models';
import AV from 'leancloud-storage';

class ImageStore {
  constructor() {
    makeAutoObservable(this);
  }

  filename: string = '';
  file: any = null;
  isUploading: boolean = false;
  serverFile?: AV.Object;

  setFilename(newFilename: string) {
    this.filename = newFilename;
  }

  setFile(newFile: any) {
    this.file = newFile;
  }

  upload() {
    this.isUploading = true;
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename)
        .then(serverFile => {
          this.serverFile = serverFile;
          resolve(serverFile);
        })
        .catch(error => reject(error))
        .finally(() => this.isUploading = false);
    });
  }

}

export default new ImageStore();