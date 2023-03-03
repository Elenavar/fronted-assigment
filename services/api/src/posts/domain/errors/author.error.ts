import { DomainError } from "@app/utils";

export class AuthorNotDefinedError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }
}
