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

  setServerFile(serverFile: AV.Object) {
    this.serverFile = serverFile;
  }

  changeIsUploading() {
    this.isUploading = !this.isUploading;
  }

  clearServerFile() {
    this.serverFile = new AV.Object();
  }

  upload() {
    this.isUploading = true;
    this.clearServerFile();
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename)
        .then(serverFile => {
          this.setServerFile(serverFile);
          resolve(serverFile);
        })
        .catch(error => reject(error))
        .finally(() => this.changeIsUploading());
    });
  }

  reset() {
    this.isUploading = false;
    this.clearServerFile()
  }

}

export default new ImageStore();