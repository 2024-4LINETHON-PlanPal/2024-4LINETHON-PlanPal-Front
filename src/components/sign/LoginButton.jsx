import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

const ButtonContainer = styled.button`
  width: 32rem;
  height: 5.4rem;

  border: none;
  border-radius: 1.5rem;
  background-color: ${() => color.primary_white};
  background-color: ${() => color.primary_black};
  background-color: ${() => color.grayscale_bc};

  text-align: center;
  color: ${() => color.primary_black};
  color: ${() => color.primary_white};
  ${() => font.medium_20}

  cursor: pointer;
`;

export default function LoginButton({ handleOnClickEvent, btnText }) {
  return (
    <>
      <ButtonContainer onClick={handleOnClickEvent}>
        <>{btnText}</>
      </ButtonContainer>
    </>
  );
}
