import { useEffect, useState } from "react";
import NotiComp from "./NotiComp";
import * as A from "./Notification.Style";
import { getNotiPlan } from "apis/getNotiPlan";

export default function Notification() {
  const [isSelected, setIsSelected] = useState(1);

  // api 연결
  useEffect(() => {
    const username = localStorage.getItem("username");

    const fetchNotiPlanData = async () => {
      const result = await getNotiPlan(username);
      console.log("알림(계획) api: ", result);
    };
    fetchNotiPlanData(username);
  }, []);

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
