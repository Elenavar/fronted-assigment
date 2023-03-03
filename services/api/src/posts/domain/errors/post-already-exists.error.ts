import { DomainError } from "@app/utils";

export class PostAlreadyExistsWithLanguageError extends DomainError {
  private constructor(errMessage) {
    super(errMessage);
  }

  public static inLanguage(id: string, language: string) {
    throw new PostAlreadyExistsWithLanguageError(
      `Post with originalId: ${id} already exists in language: ${language}`
    );
  }
}
