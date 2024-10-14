export class ErrorResponse {
  constructor(private code: number, private message: string) {}

  public getCode(): number {
    return this.code;
  }

  public getMessage(): string {
    return this.message;
  }
}
