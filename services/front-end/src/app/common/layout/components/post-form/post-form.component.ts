import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/callToApi/posts.service';
import { Store, select } from '@ngrx/store';
import { disableButtonAdd} from 'src/app/button.actions';
import { selectIsButtonAddEnabled} from 'src/app/button.selectors';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  // @Output() closeForm = new EventEmitter()
  @Output() sendForm = new EventEmitter()
  register: Post = {
    author: "",
    author_fullname: "",
    category: "",
    language: "",
    originalPostId:"",
    title: "",
  }
  isEnabledAdd$ = this.store.pipe(select(selectIsButtonAddEnabled));
  @Input() postChoosen: any = {}
  form = true;

  
  constructor(
    private postsServices: PostsService,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onCloseForm(){
    // this.form = false;
    // this.closeForm.emit(this.form)
    this.store.dispatch(disableButtonAdd());
  }
  registerPost(){
    this.sendForm.emit(this.register)
    // this.postsServices.addTranslation(this.register).subscribe(data=>console.log(data))
    // this.register = {
    //   author: "",
    //   author_fullname: "",
    //   category: "",
    //   language: "",
    //   originalPostId:"",
    //   title: "",}
  }
  

}
