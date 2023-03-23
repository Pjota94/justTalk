import { useContext, useEffect } from "react";
import CardUser from "../../components/CardUser";
import Header from "../../components/Header";
import { AuthUserContext } from "../../context/userContext";
import { Background, Container } from "./styles";

const Users = () => {
  const { listUsers, users } = useContext(AuthUserContext);

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <Container>
      <Header />
      <div className="content">
        <Background>
          {users.map((elem, index) => (
            <CardUser
              key={index}
              name={elem.name}
              username={elem.username}
              email={elem.email}
              website={elem.website}
              id={elem.id}
            />
          ))}
        </Background>
      </div>
    </Container>
  );
};

export default Users;
