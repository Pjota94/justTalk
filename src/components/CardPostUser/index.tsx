import { Container, DivComment, DivOptions } from "./styles";
import { useContext, useEffect } from "react";
import { AuthPostsContext } from "../../context/postsContext";
import { IPost } from "../../interfaces/postContext.interface";
import { AuthUserContext } from "../../context/userContext";
import { FaRegComment } from "react-icons/fa";

const CardPostUser = ({ body, id, title, userId }: IPost) => {
  const { setModalComments, listComments } = useContext(AuthPostsContext);

  return (
    <Container>
      <h1>{title}</h1>
      <p>{body}</p>
      <DivOptions>
        <DivComment>
          <FaRegComment />
          <span
            onClick={() => {
              listComments(id);
              setTimeout(() => {
                setModalComments(true);
              }, 200);
            }}
          >
            Comments
          </span>
        </DivComment>
      </DivOptions>
    </Container>
  );
};

export default CardPostUser;
