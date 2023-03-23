import { useContext, useEffect } from "react";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import ModalComents from "../../components/ModalComents";
import { AuthPostsContext } from "../../context/postsContext";
import { Background, Container } from "./styles";

const Posts = () => {
  const { isModalCommets, listPosts, post } = useContext(AuthPostsContext);

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <div className="content">
          <Background>
            <div className="scroll">
              {post.map((elem, index) => (
                <CardPost
                  key={index}
                  userId={elem.userId}
                  id={elem.id}
                  title={elem.title}
                  body={elem.body}
                />
              ))}
            </div>
          </Background>
        </div>
      </Container>
      {isModalCommets && <ModalComents />}
    </>
  );
};

export default Posts;
