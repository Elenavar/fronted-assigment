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
  posts: Post[] = []
  postChoosen: Post = {
    author: "",
    author_fullname: "",
    category: "",
    language: "",
    id: "",
    title: "",
    selftext: "",
    url: "",
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
      this.posts = response.data.data.map(post => {
        return {
          author: post.data.author,
          author_fullname: post.data.author_fullname,
          category: post.data.category,
          language: post.data.language,
          id: post.data.id,
          title: post.data.title,
          selftext: post.data.selftext,
          url: post.data.url,
        }
      })
      console.log(this.posts)
    })
  }

  onShowDetail(id: string) {
    this.showPostDetail=true;
    this.postsServices.getData().subscribe(response => {
        const cleanData = response.data.data.find(post => post.data.id === id)
        this.postChoosen = {
          author: cleanData.data.author,
          author_fullname: cleanData.data.author_fullname,
          category: cleanData.data.category,
          language: cleanData.data.language,
          id: cleanData.data.id,
          title: cleanData.data.title,
          selftext: cleanData.data.selftext,
          url: cleanData.data.url,
        }
      })
  }

  onShowForm(form){
    this.showPostForm = form;
  }

  onCloseDetail(detail){
    this.showPostDetail=detail;
  }

}
