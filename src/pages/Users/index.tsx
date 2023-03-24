import { useContext, useEffect } from "react";
import CardUser from "../../components/CardUser";
import Header from "../../components/Header";
import { AuthUserContext } from "../../context/userContext";
import { BoxCards, Container } from "./styles";
import "animate.css";

const Users = () => {
  const { listUsers, users } = useContext(AuthUserContext);

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <>
      <Header />
      <Container className="animate__animated animate__fadeIn">
        <BoxCards>
          {users.map((elem, index) => (
            <CardUser
              key={index}
              name={elem.name}
              username={elem.username}
              website={elem.website}
              email={elem.email}
              id={elem.id}
            />
          ))}
        </BoxCards>
      </Container>
    </>
  );
};

export default Users;
