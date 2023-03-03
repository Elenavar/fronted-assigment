import { BasicValueObject } from "@app/utils";
import { LanguageNotValidError } from "../errors/language.error";

const validLanguages = ["ES", "FR", "PT"];

interface Props {
  value: string;
}

export class Language extends BasicValueObject<Props> {
  private constructor(props: Props) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static fromString(lang: string) {
    if (!validLanguages.includes(lang)) {
      LanguageNotValidError.withLanguage(lang);
    }

    return new Language({ value: lang });
  }
}
