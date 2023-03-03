import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() closeForm = new EventEmitter()
  form = true;
  constructor() { }

  ngOnInit(): void {
  }

  onCloseForm(){
    this.form = false;
    this.closeForm.emit(this.form)
  }
  

}
