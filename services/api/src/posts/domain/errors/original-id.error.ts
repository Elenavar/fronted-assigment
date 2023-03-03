import { DomainError } from "@app/utils";

export class OriginalPostIdError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  public static withId(id: string) {
    throw new OriginalPostIdError(
      `Original post with id: ${id} does not exist`
    );
  }
}
