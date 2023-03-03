import { ValueObjectNotDefinedError } from "./errors/value-object-not-defined.error";

interface ValueObjectProps {
  [index: string]: any;
}

export abstract class BasicValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  protected constructor(props: T) {
    this.props = Object.freeze(props);
  }
}
