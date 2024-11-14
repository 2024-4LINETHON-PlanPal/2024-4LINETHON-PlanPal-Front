import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "components/sign/sign-up/Signup.Style";
import LoginButton from "components/sign/LoginButton";
import SignStep from "components/sign/sign-up/SignStep";
import SignStartEnd from "components/sign/sign-up/SignStartEnd";
import IconPng from "assets/sign/back-icon-30x30.png";
import { getIdIsValid } from "apis/getIdIsValid";

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [id, setId] = useState("");
  const [errorTextId, setErrorTextId] = useState("");
  const [errorTextNickname, setErrorTextNickname] = useState("");

  // 유효성 검사
  const schemas = [
    yup.object().shape({
      id: yup.string().required("아이디를 반드시 입력해주세요."),
    }),
    yup.object().shape({
      password: yup
        .string()
        .required("비밀번호를 반드시 입력해주세요.")
        .min(8, "비밀번호는 8자 이상이어야 합니다.")
        .max(16, "비밀번호는 16자 이하여야 합니다."),
    }),
    yup.object().shape({
      nickname: yup
        .string()
        .required("닉네임을 반드시 입력해주세요.")
        .max(20, "닉네임은 20자 이하여야 합니다."),
    }),
  ];

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas[step - 1]),
  });

  // api 연결 - 아이디 중복 검사
  const fetchValidId = async () => {
    const username = id;
    const result = await getIdIsValid(username);
    // console.log("아이디 중복 검사 api: ", result.status);
    // console.log("아이디 중복 검사 api: ", result.data.message); // 가능한 아이디:200
    // console.log("아이디 중복 검사 api: ", result.response.data.mesage); // 중복 아이디: 400

    if (result.status === 200) {
      // console.log("200, 가능한 아이디");
      setErrorTextId("");
      return true;
    } else {
      // console.log("400, 중복 아이디");
      setErrorTextId("이미 존재하는 아이디입니다.");
      return false;
    }
  };

  // 페이지 이동 - 회원가입
  const nextStepWithID = async () => {
    const isValid = await trigger();
    const isValidIDWithApi = await fetchValidId();
    // console.log(isValidIDWithApi); //

    if (isValid && isValidIDWithApi) {
      setStep(step + 1);
    }
  };
  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      handleMoveToLoginPage();
    }
  };

  // 페이지 이동 - 로그인
  const handleMoveToLoginPage = () => {
    navigate(`/login`);
  };

  // api 연결 - 제출
  const api = axios.create({
    baseURL: "https://planpal.kro.kr/",
  });

  async function registerUser({ id, password, nickname }) {
    try {
      const response = await api.post("users/register/", {
        username: id,
        password: password,
        nickname: nickname,
      });

      console.log("회원가입 성공:", response.data);
      return true;
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      console.error("회원가입 실패:", error.status);
      return false;
    }
  }

  // 제출
  const onSubmit = async (data) => {
    console.log("폼 데이터 제출: ", data);
    const isSuccess = await registerUser(data);

    if (isSuccess) {
      setErrorTextNickname("");
      setStep(step + 1);
    } else {
      setErrorTextNickname("이미 존재하는 닉네임입니다.");
    }
  };
  // console.log("렌더링"); //

  // 화면
  // 화면
  // 화면
  return (
    <>
      {/* 뒤로가기 */}
      <A.IconImgContainer onClick={prevStep}>
        {step !== 4 && <A.IconImg src={IconPng} alt="go-back" />}
      </A.IconImgContainer>

      {/* 안내 및 입력요소 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <A.ComponentContainer>
          {step === 0 && (
            <SignStartEnd
              titleText1="회원가입을"
              titleText2="시작합니다"
              subtitleText="플랜팔에 오신 것을 환영합니다!"
            />
          )}
          {step === 1 && (
            <SignStep
              categoryTitle="아이디"
              postposition="를"
              prevText="planpal123"
              register={register}
              registerName="id"
              errors={errors}
              errorText={errorTextId}
              setId={setId}
            />
          )}
          {step === 2 && (
            <SignStep
              categoryTitle="비밀번호"
              postposition="를"
              prevText="password123"
              register={register}
              registerName="password"
              errors={errors}
            />
          )}
          {step === 3 && (
            <SignStep
              categoryTitle="닉네임"
              postposition="을"
              prevText="김플랜"
              register={register}
              registerName="nickname"
              errors={errors}
              errorText={errorTextNickname}
            />
          )}
          {step === 4 && (
            <SignStartEnd
              titleText1="회원가입이"
              titleText2="완료되었습니다"
              subtitleText="플랜팔과 함께 생산적인 하루 보내세요!"
            />
          )}
        </A.ComponentContainer>

        {/* 다음 버튼 */}
        <A.ButtonContainer>
          {step === 0 && (
            <LoginButton
              btnText="다음"
              handleOnClickEvent={() => setStep(step + 1)}
              backgroundColor="black"
            />
          )}
          {step === 1 && (
            <LoginButton
              btnText="다음"
              handleOnClickEvent={nextStepWithID}
              backgroundColor="black"
            />
          )}
          {step === 2 && (
            <LoginButton btnText="다음" handleOnClickEvent={nextStep} backgroundColor="black" />
          )}
          {step === 3 && <LoginButton btnText="다음" backgroundColor="black" btnType="submit" />}
          {step === 4 && (
            <LoginButton
              btnText="로그인 하러가기"
              handleOnClickEvent={handleMoveToLoginPage}
              backgroundColor="black"
            />
          )}
        </A.ButtonContainer>
      </form>
    </>
  );
}
