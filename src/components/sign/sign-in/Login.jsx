import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as A from "components/sign/sign-in/Login.Style";
import LoginButton from "components/sign/LoginButton";
import LogoPng from "assets/sign/logo-regular-88x106.png";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  // api 연결
  const api = axios.create({
    baseURL: "https://planpal.kro.kr/",
  });

  async function loginUser({ id, password }) {
    try {
      // console.log("로그인 id: ", id); //
      // console.log("로그인 password: ", password); //

      const response = await api.post("users/login/", {
        username: id,
        password: password,
      });

      // console.log(response.data.message); // 로그인 성공
      return true;
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      setErrorText("아이디와 비밀번호가 올바르지 않습니다."); //
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await loginUser({ id: "planpal123", password: "qlalfqjsgh123" });
    const isSuccess = await loginUser({ id: username, password: password });

    if (isSuccess) {
      localStorage.setItem("username", username);
      localStorage.setItem("currentPage", "home");
      navigate(`/home`);
    }
  };

  return (
    <A.PageContainer>
      <A.LogoImgContainer>
        <A.LogoImg src={LogoPng} alt="PlanPal" />
      </A.LogoImgContainer>

      <A.FormContainer onSubmit={handleSubmit}>
        <label>
          <A.InputTitle>아이디</A.InputTitle>
          <A.InputBox
            type="text"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <A.InputTitle>비밀번호</A.InputTitle>
          <A.InputBox
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <A.ErrorText>{errorText}</A.ErrorText>
        </label>

        <LoginButton btnText="로그인" btnType="submit" backgroundColor="black" />
      </A.FormContainer>

      <Link to="/sign-up">
        <LoginButton backgroundColor="d9" isSignup={true} />
      </Link>
    </A.PageContainer>
  );
}
