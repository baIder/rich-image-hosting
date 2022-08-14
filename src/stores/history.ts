import {makeAutoObservable} from 'mobx';
import {Uploader} from '../models';
import {message} from 'antd';
import {Queriable} from 'leancloud-storage';

class HistoryStore {
  constructor() {
    makeAutoObservable(this);
  }

  list: Queriable[] = [];
  isLoading = false;
  hasMore = true;
  page = 0;
  limit = 10;

  toggleIsLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleHasMore() {
    this.hasMore = false;
  }

  PageIncrement() {
    this.page += 1;
  }

  append(newList: Queriable[]) {
    this.list = this.list.concat(newList);
  }

  find() {
    this.toggleIsLoading();

    Uploader.find({page: this.page, limit: this.limit}).then(newList => {
      this.append(newList);
      this.PageIncrement();
      if (newList.length < this.limit) {this.toggleHasMore();}
    }).catch(error => message.error('加载数据失败，请重试')).finally(() => this.toggleIsLoading());
  }

  reset() {
    this.list = [];
    this.isLoading = false;
    this.hasMore = true;
    this.page = 0;
  }

}

export default new HistoryStore();