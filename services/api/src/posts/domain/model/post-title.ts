import { BasicValueObject } from "@app/utils";
import { PostTitleError } from "../errors/post-title.error";

interface Props {
  value: string;
}

export class PostTitle extends BasicValueObject<Props> {
  private constructor(props: Props) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static fromString(title: string): PostTitle {
    if (title.length < 5 || title.length > 20) {
      throw new PostTitleError(
        `Post title must be larger than 5 characters and smaller than 20 characters`
      );
    }

    return new PostTitle({ value: title });
  }
}
