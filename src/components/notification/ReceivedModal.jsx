import React, { useEffect, useState } from "react";
import * as R from "./ReceivedModalStyle.js";
import x from "assets/calendar/x.svg";
import axios from "axios";

const ReceivedModal = ({ onClose, data }) => {
  const [memo, setMemo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const username = localStorage.getItem("username");

  const handleShare = () => {
    if (!memo) {
      alert("메모를 입력해주세요.");
      return;
    }

    setLoading(true);
    setError(null);
    // console.log(username, data.id);
    axios
      .post(`https://planpal.kro.kr/notifications/reply/${username}/${data.brag_id}/`, {
        brag: data.brag_id,
        memo: memo,
      })
      .then((response) => {
        alert("메모를 성공적으로 보냈습니다.");
        onClose();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <R.Background>
      <R.ModalWrap>
        <R.Title>
          <div className="text">친구의 떠벌림 소식</div>
          <R.CloseButton src={x} alt="닫기" onClick={onClose} />
        </R.Title>
        {data ? (
          <>
            <h5>
              <span>{data.friend_nickname}</span>님이 떠벌림 소식을 보냈어요
            </h5>

            <R.Selection>
              <div className="title">떠벌림 계획</div>
              <R.Name>{data.plan_title}</R.Name>

              <div className="title">한마디</div>
              <R.LongTextfield
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="친구에게 보낼 메모를 입력하세요."
              />
            </R.Selection>

            <R.ShareBtn onClick={handleShare} disabled={loading}>
              {loading ? "전송 중..." : "떠벌리기"}
            </R.ShareBtn>
          </>
        ) : (
          <p>떠벌림 계획을 불러오지 못했습니다.</p>
        )}
      </R.ModalWrap>
    </R.Background>
  );
};

export default ReceivedModal;
