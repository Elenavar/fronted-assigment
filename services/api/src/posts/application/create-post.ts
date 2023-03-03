import { IPostsRepository } from "@app/posts/domain";
import { FilePostsRepository } from "@app/posts/infrastructure";
import { OriginalPostIdError } from "../domain/errors/original-id.error";
import { PostAlreadyExistsWithLanguageError } from "../domain/errors/post-already-exists.error";

import { Author } from "../domain/model/author";
import { Language } from "../domain/model/language";
import { Post } from "../domain/model/post";
import { PostTitle } from "../domain/model/post-title";

export class CreatePost {
  private postsRepository: IPostsRepository;
  constructor({ postsRepository = new FilePostsRepository() }) {
    this.postsRepository = postsRepository;
  }

  async execute(postReq) {
    const authorFullName = postReq?.author_fullname;
    const category = postReq?.category;
    const originalPostId = postReq?.originalPostId;
    const postAuthorVO = Author.fromString(postReq.author);
    const postLanguageVO = Language.fromString(postReq.language);
    const postTitleVO = PostTitle.fromString(postReq.title);

    if (!originalPostId) {
      throw new OriginalPostIdError(
        "Error: originalPostId can not be undefined"
      );
    }

    const data = await this.postsRepository.findAllPosts();
    const postsFromOriginal = data.data.children.filter(
      (post) => post?.data?.original_post_id === originalPostId
    );

    if (postsFromOriginal.length === 0) {
      const originalPost = data.data.children.find(
        (post) => post.data.id === originalPostId
      );

      if (!originalPost) {
        OriginalPostIdError.withId(originalPostId);
      }
    } else {
      const existingPostInSameLanguage = postsFromOriginal.find(
        (post) => post.data.language === postLanguageVO.value
      );

      if (existingPostInSameLanguage) {
        PostAlreadyExistsWithLanguageError.inLanguage(
          originalPostId,
          postLanguageVO.value
        );
      }
    }

    const post = new Post(
      authorFullName,
      category,
      originalPostId,
      postAuthorVO,
      postLanguageVO,
      postTitleVO
    );
    await this.postsRepository.save(post);
    return this.toPostDTO(post);
  }

  toPostDTO(post: Post) {
    return {
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
    };
  }
}
