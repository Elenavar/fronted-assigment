import { DomainError } from "@app/utils";

export class LanguageNotValidError extends DomainError {
  private constructor(errMessage) {
    super(errMessage);
  }

  public static withLanguage(lang: string) {
    throw new LanguageNotValidError(
      `Language with code: ${lang} is not supported. Try one of the followings: ["EN", "ES", "FR", "PT"]`
    );
  }
}
