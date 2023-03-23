import { createContext, useContext, useState } from "react";
import {
  IComments,
  IPost,
  IValuePosts,
} from "../interfaces/postContext.interface";
import { IProviderProps } from "../interfaces/userContext.interface";
import { api } from "../services/api";
import { AuthUserContext } from "./userContext";

export const AuthPostsContext = createContext<IValuePosts>({} as IValuePosts);

const PostContext = ({ children }: IProviderProps) => {
  const [isModalCommets, setModalComments] = useState(false);
  const [post, setPost] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComments[]>([]);
  const { users } = useContext(AuthUserContext);

  const listPosts = () => {
    api
      .get("posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  };

  const listComments = (id: string) => {
    api
      .get(`posts/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <AuthPostsContext.Provider
      value={{
        isModalCommets,
        setModalComments,
        listPosts,
        post,
        setPost,
        listComments,
        comments,
        setComments,
      }}
    >
      {children}
    </AuthPostsContext.Provider>
  );
};

export default PostContext;
