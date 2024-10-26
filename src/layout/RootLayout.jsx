import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigationBar/NavigationBar";
import ProfileBar from "../components/profiles/ProfileBar";

export default function RootLayout() {
  return (
    <>
      <ProfileBar />
      <Outlet />
      <NavigationBar />
    </>
  );
}
