import { useContext, useEffect } from "react";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import ModalComents from "../../components/ModalComents";
import { AuthPostsContext } from "../../context/postsContext";
import { Container, Content } from "./styles";

const Posts = () => {
  const { isModalCommets, listPosts, post } = useContext(AuthPostsContext);

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          {post.map((elem, index) => (
            <CardPost
              key={index}
              body={elem.body}
              title={elem.title}
              userId={elem.userId}
              id={elem.id}
            />
          ))}
        </Content>
      </Container>
      {isModalCommets && <ModalComents />}
    </>
  );
};

export default Posts;
