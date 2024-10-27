import { Outlet } from "react-router-dom";
import ProfileListBar from "components/profiles/ProfileListBar";

export default function PromiseLayout() {
  return (
    <>
      <ProfileListBar />
      <Outlet />
    </>
  );
}
