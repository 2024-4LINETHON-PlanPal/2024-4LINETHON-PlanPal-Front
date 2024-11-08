import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

const ButtonContainer = styled.button`
  width: 32rem;
  height: 5.4rem;

  border: none;
  border-radius: 1.5rem;

  background-color: ${(props) => props.$backgroundColor === "white" && color.primary_white};
  background-color: ${(props) => props.$backgroundColor === "d9" && color.grayscale_d9};
  background-color: ${(props) => props.$backgroundColor === "black" && color.primary_black};
  background-color: ${(props) => props.$backgroundColor === "bc" && color.grayscale_bc};

  text-align: center;
  color: ${(props) =>
    (props.$backgroundColor === "white" || props.$backgroundColor === "d9") && color.primary_black};
  color: ${(props) =>
    (props.$backgroundColor === "black" || props.$backgroundColor === "bc") && color.primary_white};
  ${() => font.medium_20}

  cursor: pointer;
`;
const Span1 = styled.span`
  ${font.regular_15}
  color: ${color.primary_black};
`;
const Span2 = styled.span`
  ${font.bold_15}
  color: ${color.primary_black};
`;

export default function LoginButton({
  handleOnClickEvent,
  backgroundColor,
  btnText,
  isSignup,
  btnType,
}) {
  return (
    <>
      <ButtonContainer
        type={btnType ? btnType : "button"}
        onClick={btnType !== "submit" ? handleOnClickEvent : undefined}
        $backgroundColor={backgroundColor}
      >
        {btnText}

        {isSignup && (
          <>
            <Span1>플랜팔과 함께 할래요!</Span1> <Span2>회원가입</Span2>
          </>
        )}
      </ButtonContainer>
    </>
  );
}
