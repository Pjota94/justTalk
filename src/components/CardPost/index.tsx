import { Container, DivName, LogoName } from "./styles";
import { TfiComments } from "react-icons/tfi";
import { useContext, useEffect } from "react";
import { AuthPostsContext } from "../../context/postsContext";
import { IPost } from "../../interfaces/postContext.interface";
import { AuthUserContext } from "../../context/userContext";

const CardPost = ({ body, id, title, userId }: IPost) => {
  const { setModalComments, listComments, post } = useContext(AuthPostsContext);
  const { users, listUsers } = useContext(AuthUserContext);

  useEffect(() => {
    listUsers();
  }, [post]);

  const name = users.find((elem) => elem.id === userId);

  return (
    <Container>
      <DivName>
        <LogoName id={userId}>
          <span>{name?.name[0]}</span>
        </LogoName>
        <div className="assistant">
          <p>{name?.name}</p>
          <TfiComments
            id={id}
            onClick={() => {
              listComments(id);
              setTimeout(() => {
                setModalComments(true);
              }, 200);
            }}
          />
        </div>
      </DivName>
      <h2>{title}</h2>
      <p>{body}</p>
    </Container>
  );
};

export default CardPost;
