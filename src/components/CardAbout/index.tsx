import { IUser } from "../../interfaces/userContext.interface";
import { Container, DivInfo } from "./styles";
import "animate.css";

const CardAbout = ({ email, website, address, phone, username }: IUser) => {
  return (
    <Container className="animate__animated animate__fadeIn">
      <DivInfo>
        <p>UserName</p>
        <span>{username}</span>
      </DivInfo>
      <DivInfo>
        <p>Email</p>
        <span>{email}</span>
      </DivInfo>
      <DivInfo>
        <p>Phone</p>
        <span>{phone}</span>
      </DivInfo>
      <DivInfo>
        <p>Site</p>
        <span>{website}</span>
      </DivInfo>
      <DivInfo>
        <p>City</p>
        <span>{address?.city}</span>
      </DivInfo>
      <DivInfo>
        <p>Street</p>
        <span>{address?.street}</span>
      </DivInfo>
    </Container>
  );
};

export default CardAbout;
