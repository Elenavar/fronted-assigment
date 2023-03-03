import { DomainError } from "./domain.error";

export class ValueObjectNotDefinedError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }
}
