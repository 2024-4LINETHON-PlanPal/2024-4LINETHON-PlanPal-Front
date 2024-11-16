import * as A from "./Notification.Style";
import Plan1PNG from "assets/notification/plan-icon-24x24.png";
import Promise1PNG from "assets/notification/promise-icon-24x24.png";
import Friend1PNG from "assets/notification/friend-icon-24x24.png";

import Plan2PNG from "assets/notification/plan-icon2-24x24.png";
import Promise2PNG from "assets/notification/promise-icon2-24x24.png";
import Promise3PNG from "assets/notification/promise-icon3-24x24.png";
import Friend2PNG from "assets/notification/friend-icon2-24x24.png";
import Friend3PNG from "assets/notification/friend-icon3-24x24.png";

export default function NotiComp({ titleText, subText, notiType, onClick }) {
  return (
    <A.NotiCompContainer onClick={onClick}>
      <A.ImgContainer>
        {notiType === "plan" ? (
          <A.Img src={Plan1PNG} alt="icon" />
        ) : notiType === "promise" ? (
          <A.Img src={Promise1PNG} alt="icon" />
        ) : (
          <A.Img src={Friend1PNG} alt="icon" />
        )}
      </A.ImgContainer>

      <A.TextContainer>
        <A.NotiTitleText>{titleText}</A.NotiTitleText>
        <A.NotiInfoText>{subText}</A.NotiInfoText>
      </A.TextContainer>
    </A.NotiCompContainer>
  );
}
