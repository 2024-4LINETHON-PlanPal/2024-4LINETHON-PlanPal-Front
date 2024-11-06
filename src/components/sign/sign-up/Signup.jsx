import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "components/sign/sign-up/Signup.Style";
import LoginButton from "components/sign/LoginButton";
import SignStep from "components/sign/sign-up/SignStep";
import SignStartEnd from "components/sign/sign-up/SignStartEnd";
import IconPng from "assets/sign/back-icon-30x30.png";

export default function Signup() {
  const navigate = useNavigate();

  const handleMoveToLoginPage = () => {
    navigate(`/login`);
  };

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ id: "", password: "", nickname: "" });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      <A.IconImgContainer onClick={prevStep}>
        {step !== 4 && <A.IconImg src={IconPng} alt="go-back" />}
      </A.IconImgContainer>

      <A.ComponentContainer>
        {step === 0 && (
          <SignStartEnd
            titleText1="회원가입을"
            titleText2="시작합니다"
            subtitleText="플랜팔에 오신 것을 환영합니다!"
          />
        )}
        {step === 1 && <SignStep categoryTitle="아이디" postposition="를" prevText="planpal123" />}
        {step === 2 && (
          <SignStep categoryTitle="비밀번호" postposition="를" prevText="password123" />
        )}
        {step === 3 && <SignStep categoryTitle="닉네임" postposition="을" prevText="김플랜" />}
        {step === 4 && (
          <SignStartEnd
            titleText1="회원가입이"
            titleText2="완료되었습니다"
            subtitleText="플랜팔과 함께 생산적인 하루 보내세요!"
          />
        )}
      </A.ComponentContainer>

      <A.ButtonContainer>
        {step !== 4 ? (
          <LoginButton btnText="다음" handleOnClickEvent={nextStep} />
        ) : (
          <LoginButton btnText="로그인 하러가기" handleOnClickEvent={handleMoveToLoginPage} />
        )}
      </A.ButtonContainer>
    </>
  );
}
