import * as A from "components/modal/profile/AddFriend.Style";
import SearchPng from "assets/profile/search-icon-32x32.png";
import ClosePng from "assets/profile/close-icon-13x13.png";

function FriendItem({ friendName }) {
  return (
    <A.FriendItem>
      {friendName}
      <A.ImgContainer>
        <A.IconImg src={ClosePng} alt="삭제" />
      </A.ImgContainer>
    </A.FriendItem>
  );
}

export default function AddFriend() {
  return (
    <>
      <label>
        <A.InputTitle>내 친구 찾기</A.InputTitle>
        <A.InputContainer>
          <A.InputBox placeholder="친구의 플랜팔 닉네임을 입력해주세요" />
          <A.SubmitButton>
            <A.ButtonImg src={SearchPng} alt="검색" />
          </A.SubmitButton>
        </A.InputContainer>
      </label>
      {/* <A.ErrorText>해당 닉네임은 존재하지 않습니다.</A.ErrorText> */}
      <A.FriendList>
        <FriendItem friendName="수진" />
        <FriendItem friendName="꼉" />
        <FriendItem friendName="박태경" />
        <FriendItem friendName="가은이" />
        <FriendItem friendName="승혀니" />
      </A.FriendList>
    </>
  );
}
