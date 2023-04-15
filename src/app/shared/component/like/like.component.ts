import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ireel } from '../../model/interface';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  @Input() isliked!: boolean;
  @Output() customEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}
  OnlikeDislike() {
    this.isliked =!this.isliked
    this.customEvent.emit(this.isliked)
    console.log(this.isliked)
  }
  ngOnInit(): void {}
}
