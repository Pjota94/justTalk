import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../context/userContext";
import { IUser } from "../../interfaces/userContext.interface";
import { BackgroundInfo, Container, DivInfos, DivUser } from "./styles";

const CardUser = ({ email, name, username, website, id }: IUser) => {
  const { listUserID } = useContext(AuthUserContext);
  const navigate = useNavigate();

  return (
    <Container
      id={id}
      onClick={() => {
        listUserID(id);
        setTimeout(() => {
          navigate("/user");
        }, 100);
      }}
    >
      <DivUser>
        <p>{username}</p>
      </DivUser>
      <DivInfos>
        <BackgroundInfo>
          <span>Name</span>
        </BackgroundInfo>
        <p>{name}</p>
      </DivInfos>
      <DivInfos>
        <BackgroundInfo>
          <span>Email</span>
        </BackgroundInfo>
        <p>{email}</p>
      </DivInfos>
      <DivInfos>
        <BackgroundInfo>
          <span>Site</span>
        </BackgroundInfo>
        <p>{website}</p>
      </DivInfos>
    </Container>
  );
};

export default CardUser;
