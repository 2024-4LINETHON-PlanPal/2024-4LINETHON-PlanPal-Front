import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as A from "./NavigationBar.Style";
import promiseGrayPng from "assets/navigationBar-icons/promise-gray-30x30.png";
import homeGrayPng from "assets/navigationBar-icons/home-gray-30x30.png";
import notificationGrayPng from "assets/navigationBar-icons/notification-gray-30x30.png";
import promiseBlackPng from "assets/navigationBar-icons/promise-30x30.png";
import homeBlackPng from "assets/navigationBar-icons/home-30x30.png";
import notificationBlackPng from "assets/navigationBar-icons/notification-30x30.png";

export default function NavigationBar() {
  const navigate = useNavigate();

  const [navPage, setNavPage] = useState("home");

  const handleMoveToPromise = () => {
    navigate(`/promise`);
    setNavPage("promise");
  };
  const handleMoveToHome = () => {
    navigate(`/home`);
    setNavPage("home");
  };
  const handleMoveToNotification = () => {
    navigate(`/notification`);
    setNavPage("notification");
  };

  return (
    <A.BarContainer>
      <A.NavBtn onClick={handleMoveToPromise}>
        {navPage === "promise" ? (
          <>
            <A.ImgContainer>
              <A.Img src={promiseBlackPng} alt="약속" />
            </A.ImgContainer>
            <A.NavText selected={true}>약속</A.NavText>
          </>
        ) : (
          <>
            <A.ImgContainer>
              <A.Img src={promiseGrayPng} alt="약속" />
            </A.ImgContainer>
            <A.NavText selected={false}>약속</A.NavText>
          </>
        )}
      </A.NavBtn>

      <A.NavBtn onClick={handleMoveToHome}>
        {navPage === "home" ? (
          <>
            <A.ImgContainer>
              <A.Img src={homeBlackPng} alt="홈" />
            </A.ImgContainer>
            <A.NavText selected={true}>홈</A.NavText>
          </>
        ) : (
          <>
            <A.ImgContainer>
              <A.Img src={homeGrayPng} alt="홈" />
            </A.ImgContainer>
            <A.NavText selected={false}>홈</A.NavText>
          </>
        )}
      </A.NavBtn>

      <A.NavBtn onClick={handleMoveToNotification}>
        {navPage === "notification" ? (
          <>
            <A.ImgContainer>
              <A.Img src={notificationBlackPng} alt="알림" />
            </A.ImgContainer>
            <A.NavText selected={true}>알림</A.NavText>
          </>
        ) : (
          <>
            <A.ImgContainer>
              <A.Img src={notificationGrayPng} alt="알림" />
            </A.ImgContainer>
            <A.NavText selected={false}>알림</A.NavText>
          </>
        )}
      </A.NavBtn>
    </A.BarContainer>
  );
}
