import * as A from "components/modal/profile/MyProfileInfo.Style";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";

export default function MyProfileInfo() {
  return (
    <>
      <A.HorizontalContainer>
        <A.ImgContainer>
          <A.Img src={DefaultProfile04PNG} alt="프로필 사진" />
        </A.ImgContainer>
        <A.VerticalContainer1>
          <A.InputTitle>닉네임</A.InputTitle>
          <A.InputBox1 value={"바구현"} placeholder={"바구현"} />
        </A.VerticalContainer1>
      </A.HorizontalContainer>
      <A.VerticalContainer2>
        <A.InputTitle>한 줄 소개</A.InputTitle>
        <A.InputBox2 value={"플랜팔 짱짱"} placeholder={"플랜팔 짱짱"} />
      </A.VerticalContainer2>
    </>
  );
}
