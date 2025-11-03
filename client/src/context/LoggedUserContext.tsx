import { createContext } from "react";

interface LoggedUserDataType {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  aboutMe: string;
  _id: string;
}

export const LoggedUserContext = createContext<LoggedUserDataType | null>(null);
