import { Container, DivName, LogoName } from "./styles";
import { TfiComments } from "react-icons/tfi";
import { useContext, useEffect } from "react";
import { AuthPostsContext } from "../../context/postsContext";
import { IPost } from "../../interfaces/postContext.interface";
import { AuthUserContext } from "../../context/userContext";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardPost = ({ body, id, title, userId }: IPost) => {
  const { setModalComments, listComments } = useContext(AuthPostsContext);
  const { listUserID } = useContext(AuthUserContext);
  const navigate = useNavigate();

  return (
    <Container>
      <DivName>
        <FaRegUserCircle
          onClick={() => {
            listUserID(id);
            setTimeout(() => {
              navigate("/user");
            }, 100);
          }}
        />
        <div className="assistant">
          <p></p>
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
