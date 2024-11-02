import { Outlet } from "react-router-dom";
import ProfileListBar from "components/profiles/profile-list/ProfileListBar";
import MyProfileBar from "components/profiles/my-profile/MyProfileBar";

export default function HomeLayout() {
  return (
    <div className="container">
      <ProfileListBar />
      <MyProfileBar />
      <Outlet />
    </div>
  );
}
