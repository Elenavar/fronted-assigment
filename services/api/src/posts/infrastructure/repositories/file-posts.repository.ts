import { readFile, writeFile } from "fs";
import { IPostsRepository } from "@app/posts/domain";
import { Post } from "@app/posts/domain/model/post";

export class FilePostsRepository implements IPostsRepository {
  private fromDomain(post: Post) {
    return {
      kind: "t3",
      data: {
        author: post.author.value,
        author_fullname: post.authorFullName,
        category: post.category,
        content_categories: post.contentCategories,
        created: post.created,
        discussion_type: post.discussionType,
        hidden: post.hidden,
        id: post.id,
        is_robot_indexable: post.isRobotIndexable,
        language: post.language.value,
        likes: post.likes,
        name: post.name,
        original_post_id: post.originalpostId,
        score: post.score,
        title: post.title.value,
        url: post.url,
        view_count: post.viewCount,
      },
    };
  }

  findAllPosts(): Promise<any> {
    return new Promise((resolve) => {
      readFile("/data/linux.json", null, (err, d) =>
        resolve(JSON.parse(d.toString()))
      );
    });
  }

  save(post: Post): void {
    readFile("/data/linux.json", null, (err, d) => {
      const json = JSON.parse(d.toString());
      json.data.children.push(this.fromDomain(post));

      writeFile("/data/linux.json", JSON.stringify(json, null, 2), (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }
}
