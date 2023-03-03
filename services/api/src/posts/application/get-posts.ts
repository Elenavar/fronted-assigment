import { IPostsRepository } from "@app/posts/domain";
import { FilePostsRepository } from "@app/posts/infrastructure";

export class GetPosts {
  private postsRepository: IPostsRepository;
  constructor({ postsRepository = new FilePostsRepository() }) {
    this.postsRepository = postsRepository;
  }

  async execute(page: number, limit: number) {
    const data = await this.postsRepository.findAllPosts();
    data.data.children = data.data.children.slice(
      (page - 1) * limit,
      page * limit
    );

    return { data: data.data.children, page, limit };
  }
}
