import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';

@Component({
  selector: 'app-story-slider',
  templateUrl: './story-slider.component.html',
  styleUrls: ['./story-slider.component.scss'],
})
export class StorySliderComponent implements OnInit {

  dataUrl: string = 'https://randomuser.me/api/?inc=picture&results=10';

  storyData: Array<Story>;

  constructor() { }

  ngOnInit() {
    fetch(this.dataUrl).then(res=>res.json()).then((data) =>{
    this.storyData = Object.assign(data.results);
    console.log(this.storyData);
    });
  }

}
