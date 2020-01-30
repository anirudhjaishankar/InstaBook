import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../models/feed';

@Component({
  selector: 'app-post-slide',
  templateUrl: './post-slide.component.html',
  styleUrls: ['./post-slide.component.scss'],
})
export class PostSlideComponent implements OnInit {

  @Input() postList: Array<Feed>;

  constructor() { }

  ngOnInit() { 
  }

}
