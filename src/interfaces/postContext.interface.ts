import { Dispatch, SetStateAction } from "react";

export interface IValuePosts {
  isModalCommets: boolean;
  setModalComments: Dispatch<SetStateAction<boolean>>;
  listPosts: () => void;
  post: IPost[];
  setPost: Dispatch<SetStateAction<IPost[]>>;
  listComments: (id: string) => void;
  comments: IComments[];
  setComments: Dispatch<SetStateAction<IComments[]>>;
}

export interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface IComments {
  email: string;
  name: string;
  body: string;
}
