import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { disableButtonInfo } from 'src/app/button.actions';
import { selectIsButtonInfoEnabled } from 'src/app/button.selectors';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Output() closeDetail = new EventEmitter()
  @Input() postChoosen: any = {}
  isEnabledInfo$ = this.store.pipe(select(selectIsButtonInfoEnabled));

  detail = false;
  constructor(
    private store: Store) { }

  ngOnInit(): void {
  }

  onCloseDetail() {
    // this.detail=false
    // this.closeDetail.emit(this.detail)
    this.store.dispatch(disableButtonInfo());
  }
}
