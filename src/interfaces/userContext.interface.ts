import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IValueUsers {
  listUserID: (id: string) => void;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  listUsers: () => void;
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IUser {
  name: string;
  username: string;
  email: string;
  phone?: string;
  website: string;
  address?: IUserAddress;
  id: string;
}

export interface IUserAddress {
  street: string;
  city: string;
}
