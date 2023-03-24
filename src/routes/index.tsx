import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import UserId from "../pages/UserId";
import Users from "../pages/Users";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user" element={<UserId />} />
    </Routes>
  );
};

export default RoutesMain;
