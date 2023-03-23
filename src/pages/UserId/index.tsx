import { useContext } from "react";
import Header from "../../components/Header";
import InfoUser from "../../components/InfoUser";
import { AuthUserContext } from "../../context/userContext";
import { Background, Container, Content } from "./styles";

const UserId = () => {
  const { user } = useContext(AuthUserContext);
  return (
    <Container>
      <Header />
      <Content>
        <div className="assistant">
          <Background>
            <h1>{user.name}</h1>
          </Background>
          <InfoUser one={"User"} two={`${user.username}`} />
          <InfoUser one={"Email"} two={`${user.email}`} />
          <InfoUser one={"Site"} two={`${user.website}`} />
          <InfoUser one={"Phone"} two={`${user.phone}`} />
          <InfoUser one={"City"} two={`${user.address?.city}`} />
          <InfoUser one={"Street"} two={`${user.address?.street}`} />
        </div>
      </Content>
    </Container>
  );
};

export default UserId;
