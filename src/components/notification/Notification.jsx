import { useEffect, useState } from "react";
import NotiComp from "./NotiComp";
import * as A from "./Notification.Style";
import { getNotiPlan } from "apis/getNotiPlan";
import { getNotiPromise } from "apis/getNotiPromise";
import { getNotiFriend } from "apis/getNotiFriend";

export default function Notification() {
  const [isSelected, setIsSelected] = useState(1);
  const [notiData1, setNotiData1] = useState({ doesDataExist: false });
  const [notiData2, setNotiData2] = useState({ doesDataExist: false });
  const [notiData3, setNotiData3] = useState({ doesDataExist: false });

  // api 연결
  useEffect(() => {
    const username = localStorage.getItem("username");

    const fetchNotiData = async () => {
      // 계획
      const result1 = await getNotiPlan(username);
      if (result1.result.length > 0) {
        setNotiData1({
          messageData: result1.result,
          doesDataExist: true,
        });
      }
      // console.log("계획 알림 api: ", result1); //

      // 약속
      const result2 = await getNotiPromise(username);
      if (result2.result.length > 0) {
        setNotiData2({
          messageData: result2.result,
          doesDataExist: true,
        });
      }
      // console.log("약속 알림 api: ", result2); //

      // 친구
      const result3 = await getNotiFriend(username);
      if (result3.result.length > 0) {
        setNotiData3({
          messageData: result3.result,
          doesDataExist: true,
        });
      }
      // console.log("친구 알림 api: ", result3); //
    };
    fetchNotiData(username);
    console.log("알림 데이터: ", notiData1, notiData2, notiData3); //
  }, []);

  return (
    <>
      <A.TopBarContainer>
        <A.TopBar>알림</A.TopBar>
        <A.SubBarContainer>
          {/* plan */}
          <A.SubBar onClick={() => setIsSelected(1)} isSelected={isSelected === 1}>
            계획
          </A.SubBar>
          {/* promise */}
          <A.SubBar onClick={() => setIsSelected(2)} isSelected={isSelected === 2}>
            약속
          </A.SubBar>
          {/* friend */}
          <A.SubBar onClick={() => setIsSelected(3)} isSelected={isSelected === 3}>
            친구
          </A.SubBar>
        </A.SubBarContainer>
      </A.TopBarContainer>

      {isSelected === 1 ? (
        notiData1.doesDataExist ? (
          notiData1.messageData.map((data) => (
            <NotiComp
              key={data.id}
              notiType="plan"
              titleText={data.message.split("\n")[0]}
              subText={data.message.split("\n")[1]}
            />
          ))
        ) : (
          <p>알림이 없습니다.</p>
        )
      ) : isSelected === 2 ? (
        notiData2.doesDataExist ? (
          notiData2.messageData.map((data) => (
            <NotiComp
              key={data.id}
              notiType="promise"
              titleText={data.message.split("\n")[0]}
              subText={data.message.split("\n")[1]}
            />
          ))
        ) : (
          <p>알림이 없습니다.</p>
        )
      ) : notiData3.doesDataExist ? (
        notiData3.messageData.map((data) => (
          <NotiComp
            key={data.id}
            notiType="friend"
            titleText={data.message.split("\n")[0]}
            subText={data.message.split("\n")[1]}
          />
        ))
      ) : (
        <p>알림이 없습니다.</p>
      )}
    </>
  );
}
