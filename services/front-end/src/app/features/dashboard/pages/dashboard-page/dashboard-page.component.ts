import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/callToApi/posts.service';
import { Store, select } from '@ngrx/store';
import { selectIsButtonAddEnabled,  selectIsButtonInfoEnabled} from 'src/app/button.selectors';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  posts: any = []
  postChoosen: any ={
  }

  constructor(
    private postsServices: PostsService,
    private store: Store
  ) { }

  isEnabledAdd$ = this.store.pipe(select(selectIsButtonAddEnabled));
  isEnabledInfo$ = this.store.pipe(select(selectIsButtonInfoEnabled));

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.postsServices.getData().subscribe(response => {
      this.posts=response.data.data
    })
  }

  getDetail(id: string) {
    this.postsServices.getData().subscribe(response => {
        const cleanData = response.data.data.find(post => post.data.id === id)
        this.postChoosen = cleanData.data
      })
  }

  postForm(id){
    this.postsServices.getData().subscribe(response => {
      const cleanData = response.data.data.find(post => post.data.id === id)
      console.log(cleanData)
      this.postChoosen = cleanData.data
      console.log(this.postChoosen)
    })
  }

  addPost(register){

    this.postsServices.addTranslation(register).subscribe(data=>this.posts.unshift(data))
  }

}
