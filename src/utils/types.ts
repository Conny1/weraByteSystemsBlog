export type userType = {
  name: string;
  email: string;
  password: string;
  isadmin?: boolean;
  id: number;
};

export type contentType = {
  userid: number;
  id: number;
  title: string;
  content: string;
  createdat: Date;
};
