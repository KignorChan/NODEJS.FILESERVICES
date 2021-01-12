export class CustomError {
  code: number;
  message: string;

  constructor(code: number, message: string = "") {
    this.code = code;
    this.message = message;
  }

  toJson() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}
