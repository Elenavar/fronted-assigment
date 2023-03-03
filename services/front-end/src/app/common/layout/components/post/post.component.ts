import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Post} from '../../../../model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: any = {
  }

  @Output() showDetail = new EventEmitter();
  @Output() showForm = new EventEmitter();

  constructor(){}

  onShowDetail(){
    this.showDetail.emit(this.post.data.id);
  }

  onShowForm(){
    this.showForm.emit(this.post.data.id)
  }

}
