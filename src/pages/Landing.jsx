import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <p style={{ fontSize: "2rem" }}>랜딩(로그인)페이지입니다.</p>
      <br />
      <Link to="/landing">
        <p style={{ fontSize: "2rem" }}>로그인 화면으로 가기</p>
      </Link>
      <Link to="/home">
        <p style={{ fontSize: "2rem" }}>홈 화면으로 가기</p>
      </Link>
    </>
  );
}
