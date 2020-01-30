import { Injectable } from '@angular/core';
import { feeds } from '../../../assets/feeds.json';
import { Feed } from '../../models/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feedList: Array<Feed>;
  constructor() {
    this.feedList = feeds;
  }

  public getData(): Array<Feed> {
    console.log(this.feedList);
    return this.feedList;
  }
}
