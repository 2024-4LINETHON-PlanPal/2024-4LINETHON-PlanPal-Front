import * as A from "components/profiles/my-profile/MyProfileBar.Style.jsx";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";

export default function MyProfileBar() {
  return (
    <A.BarContainer>
      <A.ImgContainer>
        <A.Img src={DefaultProfile04PNG} alt="PlanPal" />
      </A.ImgContainer>

      <A.ProfileInfoContainer>
        <A.ProfileName>내 닉네임</A.ProfileName>
        <A.ProfileIntroduce>한줄소개</A.ProfileIntroduce>
      </A.ProfileInfoContainer>
    </A.BarContainer>
  );
}
