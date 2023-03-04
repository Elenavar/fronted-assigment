import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { enableButtonAdd, disableButtonAdd } from 'src/app/button.actions';
import { selectIsButtonAddEnabled, selectIsButtonInfoEnabled } from 'src/app/button.selectors';

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
  isEnabledAdd$ = this.store.pipe(select(selectIsButtonAddEnabled));
  isEnabledInfo$ = this.store.pipe(select(selectIsButtonInfoEnabled));
  constructor(private store: Store){}

  onShowDetail(){
    this.store.dispatch(enableButtonAdd());
    this.showDetail.emit(this.post.data.id);
  }

  onShowForm(){
    this.showForm.emit(this.post.data.id)
    this.store.dispatch(enableButtonAdd());
  }

}
