import React, { useEffect, useState } from "react";
import * as S from './ShareModalStyle.js';
import x from "assets/calendar/x.svg";
import serch from "assets/calendar/serch.svg";
import axios from "axios";

const ShareModal = ({ onClose, plan_id }) => {
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [plan, setPlan] = useState({});
  const [memo, setMemo] = useState("");
  const username = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/users/friends/${username}/`)
      .then((response) => {
        if (response.status === 200) {
          setFriends(response.data.result);
        }
      })
      .catch((error) => console.error("친구 목록 불러오기 실패:", error));
  }, [username]);

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/plans/${username}/${plan_id}/`)
      .then((response) => {
        if (response.status === 200) {
          setPlan(response.data.result);
        }
      })
      .catch((error) => console.error("플랜 불러오기 실패:", error));
  }, [username, plan_id]);

  const handleFriendSelect = (event) => {
    const selectedFriend = friends.find(friend => friend.id === parseInt(event.target.value));
    if (selectedFriend && !selectedFriends.includes(selectedFriend)) {
      setSelectedFriends([...selectedFriends, selectedFriend]);
    }
  };

  const handleRemoveFriend = (friendId) => {
    setSelectedFriends(selectedFriends.filter(friend => friend.id !== friendId));
  };
  const handleShareClick = () => {
    if (!plan.title || selectedFriends.length === 0 || memo.trim() === "") {
      alert("모든 항목을 채워주세요.");
      return;
    }

    const payload = {
      plan : plan,
      recipient: selectedFriends.map(friend => friend.id),
      memo: memo
    };
    console.log(payload);
    axios
      .post(
        `https://planpal.kro.kr/notifications/brag/${username}/${plan_id}/`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("떠벌리기 요청이 성공적으로 전송되었습니다!");
          onClose();
        }
      })
      .catch((error) => console.error("떠벌리기 요청 실패:", error));
  };


  return (
    <S.Background>
      <S.ModalWrap>
        <S.Title>
          <div className="text">떠벌리기</div>
          <S.CloseButton src={x} alt="닫기" onClick={onClose} />
        </S.Title>
        <h5>계획 실행 동기부여를 위해 친구들에게 떠벌려보세요</h5>

        <S.Selection>
          <div className="title">떠벌릴 계획</div>
          <S.Name>{plan.title}</S.Name>
          <div className="title">떠벌릴 친구 찾기</div>
          <S.People>
            <div className="wrap">
              <S.LongRoundBox onChange={handleFriendSelect}>
                <option value=" ">친구를 선택하세요</option>
                {friends.map((friend) => (
                  <option key={friend.id} value={friend.id}>
                    {friend.nickname}
                  </option>
                ))}
              </S.LongRoundBox>
              <img src={serch} alt="검색" />
            </div>
          </S.People>
          <S.PeopleWrap>
            {selectedFriends.map((friend) => (
              <S.SelectedPeople key={friend.id}>
                <div className="name">{friend.nickname}</div>
                <img src={x} alt="제거" onClick={() => handleRemoveFriend(friend.id)} />
              </S.SelectedPeople>
            ))}
          </S.PeopleWrap>
          <div className="title">한마디</div>
          <S.LongTextfield
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="친구들에게 보낼 메모를 입력하세요."
          />
        </S.Selection>
        <S.ShareBtn onClick={handleShareClick}>떠벌리기</S.ShareBtn>
      </S.ModalWrap>
    </S.Background>
  );
};

export default ShareModal;
