import * as A from "components/sign/sign-up/Signup.Style";
import LogoPng from "assets/sign/logo-mini-41x54.png";

export default function SignStartEnd({ titleText1, titleText2, subtitleText }) {
  return (
    <>
      <A.LogoImgContainer>
        <A.LogoImg src={LogoPng} alt="PranPal" />
      </A.LogoImgContainer>

      <A.TitleText>
        {titleText1}
        <br />
        {titleText2}
      </A.TitleText>
      <A.SubtitleText>{subtitleText}</A.SubtitleText>
    </>
  );
}
