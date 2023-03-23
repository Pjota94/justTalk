import { createContext, useState } from "react";
import {
  IProviderProps,
  IUser,
  IValueUsers,
} from "../interfaces/userContext.interface";
import { api } from "../services/api";

export const AuthUserContext = createContext<IValueUsers>({} as IValueUsers);

const UserContext = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);

  const listUserID = (id: string) => {
    api
      .get(`users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const listUsers = () => {
    api
      .get("users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <AuthUserContext.Provider
      value={{ listUserID, user, setUser, listUsers, users, setUsers }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default UserContext;
