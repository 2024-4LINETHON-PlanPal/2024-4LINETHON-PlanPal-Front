import * as A from "components/modal/MyProfileInfo.Style";

export default function MyProfileInfo() {
  return (
    <>
      <A.ProfileIntroduceContainer>
        <A.InputName>[필수]InsideComponent: 내부 컴포넌트</A.InputName>
        <A.InputName>[필수]setCloseModal: 모달 닫는 함수(X 아이콘 누르면 실행)</A.InputName>
        <A.InputName>[필수]modalHeight: 모달 세로 길이(모달 위치 조정용)</A.InputName>
        <p>예시: modalHeight="51rem"</p>
      </A.ProfileIntroduceContainer>
      {/* <A.ProfileNicknameContainer>
        <A.InputName>닉네임</A.InputName>
        <p>닉네임을 입력하세요</p>
      </A.ProfileNicknameContainer>
      <A.ProfileIntroduceContainer>
        <A.InputName>한 줄 소개</A.InputName>
        <p>한 줄 소개를 입력하세요</p>
      </A.ProfileIntroduceContainer> */}
    </>
  );
}
