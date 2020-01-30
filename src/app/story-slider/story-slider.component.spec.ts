import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorySliderComponent } from './story-slider.component';

describe('StorySliderComponent', () => {
  let component: StorySliderComponent;
  let fixture: ComponentFixture<StorySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorySliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
