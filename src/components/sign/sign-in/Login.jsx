import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as A from "components/sign/sign-in/Login.Style";
import LoginButton from "components/sign/LoginButton";
import LogoPng from "assets/sign/logo-regular-88x106.png";

export default function Login() {
  const navigate = useNavigate();

  const handleMoveToHomePage = () => {
    navigate(`/home`);
  };

  return (
    <A.PageContainer>
      <A.LogoImgContainer>
        <A.LogoImg src={LogoPng} alt="PlanPal" />
      </A.LogoImgContainer>

      <A.FormContainer>
        <label>
          <A.InputTitle>아이디</A.InputTitle>
          <A.InputBox type="text" placeholder="아이디를 입력해주세요" />
        </label>
        <label>
          <A.InputTitle>비밀번호</A.InputTitle>
          <A.InputBox type="password" placeholder="비밀번호를 입력해주세요" />
          <A.ErrorText></A.ErrorText>
          {/* <A.ErrorText>아이디와 비밀번호가 일치하지 않습니다.</A.ErrorText> */}
        </label>

        <LoginButton
          btnText="로그인"
          handleOnClickEvent={handleMoveToHomePage}
          backgroundColor="black"
        />
      </A.FormContainer>

      <Link to="/sign-up">
        <LoginButton backgroundColor="d9" isSignup={true} />
      </Link>
    </A.PageContainer>
  );
}
