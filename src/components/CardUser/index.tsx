import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../context/userContext";
import { IUser } from "../../interfaces/userContext.interface";
import { Container, DivHeader, DivInfos } from "./styles";
import { HiInformationCircle } from "react-icons/hi";

const CardUser = ({ email, name, username, website, id }: IUser) => {
  const { listUserID } = useContext(AuthUserContext);
  const navigate = useNavigate();

  return (
    <Container>
      <DivHeader>
        <p></p>
        <h1>{name}</h1>
        <HiInformationCircle
          id={id}
          onClick={() => {
            listUserID(id);
            setTimeout(() => {
              navigate("/user");
            }, 100);
          }}
        />
      </DivHeader>
      <DivInfos>
        <p>Username</p>
        <span>{username}</span>
      </DivInfos>
      <DivInfos>
        <p>Email</p>
        <span>{email}</span>
      </DivInfos>
      <DivInfos>
        <p>Site</p>
        <span>{website}</span>
      </DivInfos>
    </Container>
  );
};

export default CardUser;
