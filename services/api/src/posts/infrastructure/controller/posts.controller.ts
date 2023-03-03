import { Request, Response } from "express";
import { DomainError } from "@app/utils";
import { CreatePost, GetPosts } from "@app/posts/application";

export class PostsController {
  private getPosts = new GetPosts({});
  private createPost = new CreatePost({});

  async findAllPosts(req: Request, res: Response) {
    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const posts = await this.getPosts.execute(page, limit);
      res.status(200).json({ data: posts });
    } catch (err) {
      let status = 500;
      if (err instanceof DomainError) {
        status = 400;
      }
      res.status(status).json({ status: 200, data: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const post = await this.createPost.execute(req.body);
      res.status(200).json({ status: 200, data: post });
    } catch (err) {
      let status = 500;
      if (err instanceof DomainError) {
        status = 400;
      }
      res.status(status).json({ status: status, data: err.message });
    }
  }
}
