import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotiComp from "./NotiComp";
import ReceivedModal from "./ReceivedModal";
import * as A from "./Notification.Style";
import { getNotiPlan } from "apis/getNotiPlan";
import { getNotiPromise } from "apis/getNotiPromise";
import { getNotiFriend } from "apis/getNotiFriend";

export default function Notification() {
  // const location = useLocation();
  const navigate = useNavigate();
  // const state = location.state;
  const [isSelected, setIsSelected] = useState(1);
  const [notiData1, setNotiData1] = useState({ doesDataExist: false });
  const [notiData2, setNotiData2] = useState({ doesDataExist: false });
  const [notiData3, setNotiData3] = useState({ doesDataExist: false });
  const [selectedData, setSelectedData] = useState(null);

  const [showReceivedModal, setShowReceivedModal] = useState(false);

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

      // 약속
      const result2 = await getNotiPromise(username);
      if (result2.result.length > 0) {
        setNotiData2({
          messageData: result2.result,
          doesDataExist: true,
        });
      }

      // 친구
      const result3 = await getNotiFriend(username);
      if (result3.result.length > 0) {
        setNotiData3({
          messageData: result3.result,
          doesDataExist: true,
        });
        // console.log(result3.result); //
      }
    };
    fetchNotiData(username);
  }, []);

  const handleModalOpen = (data) => {
    // console.log(data); //
    if (data.notification_type === "brag") {
      // 친구 응원 모달
      setSelectedData(data);
      setShowReceivedModal(true);
    } else if (data.notification_type === "add_friend") {
      // 친구 신청 받기 모달
      localStorage.setItem("currentPage", "home");
      navigate("/home", {
        state: {
          toggleAcceptFriendModal: true,
          targetUsername: data.friend_username,
          targetNickname: data.friend_nickname,
        },
      });
    }
  };

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

      <A.NotiListContainer>
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
            <A.NoNotiText>알림이 없습니다.</A.NoNotiText>
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
            <A.NoNotiText>알림이 없습니다.</A.NoNotiText>
          )
        ) : notiData3.doesDataExist ? (
          notiData3.messageData.map((data) => (
            <NotiComp
              key={data.id}
              notiType={
                data.notification_type === "brag"
                  ? "brag"
                  : data.notification_type === "cheering"
                  ? "cheering"
                  : "friend"
              }
              titleText={data.message.split("\n")[0]}
              subText={data.message.split("\n")[1]}
              onClick={() => handleModalOpen(data)}
            />
          ))
        ) : (
          <A.NoNotiText>알림이 없습니다.</A.NoNotiText>
        )}
      </A.NotiListContainer>

      <A.BottomMarginBox>
        <A.BottomMarginBox />
      </A.BottomMarginBox>

      {showReceivedModal && <ReceivedModal data={selectedData} onClose={() => setShowReceivedModal(false)} />}
    </>
  );
}
