import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigationBar/NavigationBar";

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
}
