import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed/feed.service';
import { Feed } from '../../models/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  feedList :Array<Feed>;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedList = this.feedService.getData();
  }

  doRefresh(event){
    setTimeout(() =>{
      event.target.complete();
    }, 500);
  }
}
