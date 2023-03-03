import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Output() closeDetail = new EventEmitter()
@Input() postChoosen: any = {}

  detail = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCloseDetail(){
    this.detail=false
    this.closeDetail.emit(this.detail)
  }
}
