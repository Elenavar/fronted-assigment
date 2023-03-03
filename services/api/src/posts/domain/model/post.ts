import { Author } from "./author";
import { Language } from "./language";
import { PostTitle } from "./post-title";

export class Post {
  private _author: Author;
  private _authorFullName: string;
  private _category: string | null;
  private _contentCategories: string[];
  private _created: number;
  private _discussionType: string | null;
  private _hidden: boolean;
  private _id: string;
  private _isRobotIndexable: boolean;
  private _language: Language;
  private _likes: number;
  private _name: string;
  private _originalPostId: string;
  private _score: number;
  private _title: PostTitle;
  private _url: string;
  private _viewCount: number;

  constructor(
    authorFullName: string,
    category: string,
    originalPostId: string,
    author: Author,
    language: Language,
    title: PostTitle
  ) {
    this._author = author;
    this._authorFullName = authorFullName ?? author.value;
    this._category = category ?? null;
    this._contentCategories = [];
    this._created = Date.now();
    this._discussionType = null;
    this._hidden = false;
    this._id = this.generateId(7);
    this._isRobotIndexable = true;
    this._language = language;
    this._likes = 0;
    this._name = this.generateId(10);
    this._originalPostId = originalPostId;
    this._score = 0;
    this._title = title;
    this._url = `https://lwn.net/Articles/${this._id}`;
    this._viewCount = 0;
  }

  private generateId(length: number): string {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  get author(): Author {
    return this._author;
  }

  get authorFullName(): string {
    return this._authorFullName;
  }

  get category(): string {
    return this._category;
  }

  get contentCategories(): string[] {
    return this._contentCategories;
  }

  get created(): number {
    return this._created;
  }

  get discussionType(): string {
    return this._discussionType;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  get id(): string {
    return this._id;
  }

  get isRobotIndexable(): boolean {
    return this._isRobotIndexable;
  }

  get language(): Language {
    return this._language;
  }

  get likes(): number {
    return this._likes;
  }

  get name(): string {
    return this._name;
  }

  get originalpostId(): string {
    return this._originalPostId;
  }

  get score(): number {
    return this._score;
  }

  get title(): PostTitle {
    return this._title;
  }

  get url(): string {
    return this._url;
  }

  get viewCount(): number {
    return this._viewCount;
  }
}
