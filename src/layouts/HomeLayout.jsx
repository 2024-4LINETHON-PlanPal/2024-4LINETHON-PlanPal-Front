import { Outlet } from "react-router-dom";
import ProfileListBar from "components/profiles/ProfileListBar";
import MyProfileBar from "components/profiles/MyProfileBar";

export default function HomeLayout() {
  return (
    <>
      <ProfileListBar />
      <MyProfileBar />
      <Outlet />
    </>
  );
}
