import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { AuthUserContext } from "../../context/userContext";
import {
  Background,
  BoxContent,
  Container,
  Content,
  DivButtons,
  DivPhoto,
} from "./styles";
import { HiOutlineReply } from "react-icons/hi";
import perfil from "../../assets/perfil.png";
import { AuthPostsContext } from "../../context/postsContext";
import CardPostUser from "../../components/CardPostUser";
import ModalComents from "../../components/ModalComents";
import { useNavigate } from "react-router-dom";
import CardAbout from "../../components/CardAbout";
import CommentUser from "../../components/CommentUser";

const UserId = () => {
  const [type, setType] = useState("Posts");
  const { user } = useContext(AuthUserContext);
  const { listPosts, post, isModalCommets } = useContext(AuthPostsContext);
  const navigate = useNavigate();

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Background>
          <DivPhoto>
            <HiOutlineReply onClick={() => navigate(-1)} />
            <div className="info-name">
              <img src={perfil} alt="" />
              <h1>{user.name}</h1>
            </div>
          </DivPhoto>
          <DivButtons>
            <button onClick={() => setType("Posts")}>Recentes Posts</button>
            <button onClick={() => setType("Comments")}>
              Recentes Comments
            </button>
            <button onClick={() => setType("Infos")}>About</button>
          </DivButtons>
          <BoxContent>
            <Content>
              {type === "Posts" ? (
                post
                  .filter((elem) => elem.userId === user.id)
                  .map((elem, index) => (
                    <CardPostUser
                      key={index}
                      body={elem.body}
                      title={elem.title}
                      id={elem.id}
                      userId={elem.userId}
                    />
                  ))
              ) : (
                <></>
              )}
              {type === "Infos" ? (
                <CardAbout
                  username={user.username}
                  email={user.email}
                  phone={user.phone}
                  website={user.website}
                  address={user.address}
                  name={""}
                  id={""}
                />
              ) : (
                <></>
              )}
              {type === "Comments" ? <CommentUser /> : <></>}
            </Content>
          </BoxContent>
        </Background>
      </Container>
      {isModalCommets && <ModalComents />}
    </>
  );
};

export default UserId;
