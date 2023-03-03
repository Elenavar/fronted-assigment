import { BasicValueObject } from "@app/utils";
import { AuthorNotDefinedError } from "../errors/author.error";

interface Props {
  value: string;
}

export class Author extends BasicValueObject<Props> {
  private constructor(props: Props) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static fromString(name: string) {
    if (!name) {
      throw new AuthorNotDefinedError("Every post must have a defined author");
    }
    return new Author({ value: name });
  }
}
