import * as A from "components/modal/profile/AcceptFriend.Style";
import ProfilePng from "assets/profile/profile-icon-50x50.png";
import { useState } from "react";

export default function AcceptFriend() {
  const [isFriend, setIsFriend] = useState(false);

  return (
    <>
      <A.FriendProfileContainer>
        <A.ImgContainer>
          <A.Img src={ProfilePng} alt={"profile"} />
        </A.ImgContainer>
        <A.InfoText>
          <A.InfoSpan>김플랜</A.InfoSpan>님께서
          <br />
          친구 추가하셨습니다.
        </A.InfoText>
      </A.FriendProfileContainer>
      <A.SubmitButton $isFriend={isFriend}>나도 친구 추가하기</A.SubmitButton>
    </>
  );
}
