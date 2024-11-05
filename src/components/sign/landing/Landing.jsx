import { Link } from "react-router-dom";
import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";
import LoginButton from "components/sign/LoginButton";
import LogoPng from "assets/sign/logo-landing-124x137.png";
import SignUpTextPng from "assets/sign/text-signup-321x16.png";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${() => color.primary_white}; //
  background-color: ${() => color.primary_black};
`;
const LogoImgContainer = styled.div`
  margin: 24.5vh 0 36.7vh 0;
  width: 12.4rem;
  height: 13.7rem;

  border: none;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
const ContainerMargin = styled.div`
  margin: 1.8rem 0 0 0;
`;
//
const ImgContainer = styled.div`
  padding: 0;
  width: 32.1rem;
  height: 1.6rem;

  border: none;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export default function Landing() {
  return (
    <PageContainer>
      <LogoImgContainer>
        <LogoImg src={LogoPng} alt="PlanPal" />
      </LogoImgContainer>

      <Link to="/login">
        <LoginButton btnText="로그인" />
      </Link>

      <ContainerMargin>
        <Link to="/sign-up">
          {/* 수정하자 */}
          <ImgContainer>
            <Img src={SignUpTextPng} alt="PlanPal" />
          </ImgContainer>
        </Link>
      </ContainerMargin>
    </PageContainer>
  );
}
