import { Post } from "../model/post";

export interface IPostsRepository {
  findAllPosts(): Promise<any>;
  save(post: Post): void;
}
