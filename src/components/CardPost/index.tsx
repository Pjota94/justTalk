import { Container, DivComment, DivOptions, DivUser } from "./styles";
import { useContext, useEffect } from "react";
import { AuthPostsContext } from "../../context/postsContext";
import { IPost } from "../../interfaces/postContext.interface";
import { AuthUserContext } from "../../context/userContext";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardPost = ({ body, id, title, userId }: IPost) => {
  const { setModalComments, listComments, post } = useContext(AuthPostsContext);
  const { users, listUsers, listUserID } = useContext(AuthUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    listUsers();
  }, [post]);

  const name = users.find((elem) => elem.id === userId);

  return (
    <Container>
      <h1>{title}</h1>
      <p>{body}</p>
      <DivOptions>
        <DivUser>
          <HiOutlineUser
            onClick={() => {
              listUserID(userId);
              setTimeout(() => {
                navigate("/user");
              }, 100);
            }}
          />
          <span
            id={userId}
            onClick={() => {
              listUserID(userId);
              setTimeout(() => {
                navigate("/user");
              }, 100);
            }}
          >
            {name?.username}
          </span>
        </DivUser>
        <DivComment>
          <FaRegComment
            onClick={() => {
              listComments(id);
              setTimeout(() => {
                setModalComments(true);
              }, 200);
            }}
          />
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

export default CardPost;
