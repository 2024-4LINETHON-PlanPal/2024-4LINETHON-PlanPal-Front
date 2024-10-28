import { Outlet } from "react-router-dom";
import ProfileListBar from "components/profiles/profile-list/ProfileListBar";

export default function PromiseLayout() {
  return (
    <>
      <ProfileListBar />
      <Outlet />
    </>
  );
}
