import { useState } from "react";
import NotiComp from "./NotiComp";
import * as A from "./Notification.Style";

export default function Notification() {
  const [isSelected, setIsSelected] = useState(1);

  return (
    <>
      <A.TopBarContainer>
        <A.TopBar>알림</A.TopBar>
        <A.SubBarContainer>
          <A.SubBar onClick={() => setIsSelected(1)} isSelected={isSelected === 1}>
            계획
          </A.SubBar>
          <A.SubBar onClick={() => setIsSelected(2)} isSelected={isSelected === 2}>
            약속
          </A.SubBar>
          <A.SubBar onClick={() => setIsSelected(3)} isSelected={isSelected === 3}>
            친구
          </A.SubBar>
        </A.SubBarContainer>
      </A.TopBarContainer>

      {/* map함수 */}
      <NotiComp />
      <NotiComp />
      <NotiComp />
    </>
  );
}
