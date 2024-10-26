import { useNavigate } from "react-router-dom";

import * as A from "./NavigationBar.Style";
import promiseGrayPng from "../../assets/navigationBar-icons/promise-gray-30x30.png";
import homeGrayPng from "../../assets/navigationBar-icons/home-gray-30x30.png";
import notificationGrayPng from "../../assets/navigationBar-icons/notification-gray-30x30.png";
import promiseBlackPng from "../../assets/navigationBar-icons/promise-30x30.png";
import homeBlackPng from "../../assets/navigationBar-icons/home-30x30.png";
import notificationBlackPng from "../../assets/navigationBar-icons/notification-30x30.png";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleMoveToPromise = () => {
    navigate(`/promise`);
  };
  const handleMoveToHome = () => {
    navigate(`/home`);
  };
  const handleMoveToNotification = () => {
    navigate(`/notification`);
  };

  return (
    <A.BarContainer>
      <A.NavBtn onClick={handleMoveToPromise}>
        <A.ImgContainer>
          <A.Img src={promiseGrayPng} alt="약속" />
        </A.ImgContainer>
        <A.NavText selected={true}>약속</A.NavText>
      </A.NavBtn>

      <A.NavBtn onClick={handleMoveToHome}>
        <A.ImgContainer>
          <A.Img src={homeGrayPng} alt="홈" />
        </A.ImgContainer>
        <A.NavText>홈</A.NavText>
      </A.NavBtn>

      <A.NavBtn onClick={handleMoveToNotification}>
        <A.ImgContainer>
          <A.Img src={notificationGrayPng} alt="알림" />
        </A.ImgContainer>
        <A.NavText>알림</A.NavText>
      </A.NavBtn>
    </A.BarContainer>
  );
}
