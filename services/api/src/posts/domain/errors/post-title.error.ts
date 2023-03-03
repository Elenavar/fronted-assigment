import { DomainError } from "@app/utils";

export class PostTitleError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }
}
