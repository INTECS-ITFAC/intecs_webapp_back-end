export type user = {
  _id?: string;
  createdBy: string;
  email: string;
  password: string;
  saltSecret: string;
  date: Date;
};
