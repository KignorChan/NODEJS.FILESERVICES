export class File {
  fileId: string;
  uid: string;
  filename: string;
  originalname:string;
  fieldname: string | null;
  mimetype: string | null;
  ext: string | null;
  path: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  flag: number;

  constructor({
    fileId,
    uid,
    filename,
    originalname,
    fieldname,
    mimetype,
    ext,
    path,
    size,
    createdAt,
    updatedAt,
    flag,
  }: any) {
    this.fileId = fileId;
    this.uid = uid;
    this.filename = filename;
    this.originalname = originalname;
    this.fieldname = fieldname;
    this.mimetype = mimetype;
    this.ext = ext;
    this.path = path;
    this.size = size;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.flag = flag;
  }

  toJson() {
    return {
      fileId: this.fileId,
      uid: this.uid,
      filename: this.filename,
      originalname: this.originalname,
      fieldname: this.fieldname,
      mimetype: this.mimetype,
      ext: this.ext,
      path: this.path,
      size: this.size,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      flag: this.flag,
    };
  }

  toCreateRecordJson() {
    return {
      fileId: this.fileId,
      uid: this.uid,
      filename: this.filename,
      originalname: this.originalname,
      fieldname: this.fieldname,
      mimetype: this.mimetype,
      ext: this.ext,
      path: this.path,
      size: this.size,
    };
  }
}
