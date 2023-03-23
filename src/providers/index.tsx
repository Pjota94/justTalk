import PostContext from "../context/postsContext";
import UserContext from "../context/userContext";
import { IProviderProps } from "../interfaces/userContext.interface";

const Provider = ({ children }: IProviderProps) => {
  return (
    <PostContext>
      <UserContext>{children}</UserContext>
    </PostContext>
  );
};

export default Provider;
