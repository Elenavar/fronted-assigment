import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../model/post.model';
import { PostsService } from 'src/app/callToApi/posts.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  posts: any = []
  postChoosen: any ={
  }

  showPostDetail = false;
  showPostForm = false;

  constructor(
    private postsServices: PostsService
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.postsServices.getData().subscribe(response => {
      // this.posts = response.data.data.map(post => {
      //   return {
      //     author: post.data.author,
      //     author_fullname: post.data.author_fullname,
      //     category: post.data.category,
      //     language: post.data.language,
      //     id: post.data.id,
      //     title: post.data.title,
      //     selftext: post.data.selftext,
      //     original_post_id: post.data.original_post_id,
      //     url: post.data.url,
      //   }
      // })
      this.posts=response.data.data
      console.log(this.posts)
    })
  }

  onShowDetail(id: string) {
    console.log(id)
    this.showPostDetail=true;
    this.postsServices.getData().subscribe(response => {
        const cleanData = response.data.data.find(post => post.data.id === id)
        console.log(cleanData)
        this.postChoosen = cleanData.data
        console.log(this.postChoosen)
      })
  }

  onShowForm(form){
    this.showPostForm = form;
  }

  onCloseDetail(detail){
    this.showPostDetail=detail;
  }

  onCloseForm(form){
    this.showPostForm = form;
  }

}
