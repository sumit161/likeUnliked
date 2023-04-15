import { Component } from '@angular/core';
import { Ireel } from './shared/model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '15AprilReusableComponent';
  reels: Array<Ireel> = [
    {
      title: 'random images1',
      likeCount: 1231,
      islike: false,
      id: 1,
      img:"https://picsum.photos/300/299",
    },
    {
      title: 'random images2',
      likeCount: 12323,
      islike: false,
      id: 2,
      img:"https://picsum.photos/300/300",
    },
    {
      title: 'random images3',
      likeCount: 12356,
      islike: false,
      id: 3,
      img:"https://picsum.photos/300/301",
    },
  ];
  Callbackfunction(likeStatus: any, id: number) {
    this.reels.forEach((element) => {
      if (element.id === id) {
        if (likeStatus) {
          element.likeCount++;
        } else {
          element.likeCount--;
        }
      }
    });
  }
}
