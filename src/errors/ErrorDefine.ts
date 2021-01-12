export class ErrorDefine {
    code: number;
    error: string;
    type: string;
    msg: string | null;
    msgCN: string | null;
    from: string;
  
    constructor(
      code: number,
      error: string,
      type: string,
      msg: string | null = null,
      msgCN: string | null = null,
      from: string = "CARGOGO"
    ) {
      this.code = code;
      this.error = error;
      this.type = type;
      this.msg = msg;
      this.msgCN = msgCN;
      this.from = from;
    }
  
    toJson() {
      return {
        code: this.code,
        error: this.error,
        type: this.type,
        msg: this.msg,
        msgCN: this.msgCN,
        from: this.from,
      };
    }
  }
  