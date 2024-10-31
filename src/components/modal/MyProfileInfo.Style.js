import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const ProfileNicknameContainer = styled.div`
  margin-top: 3.5rem;

  display: flex;
  flex-direction: column; //
`;
export const InputName = styled.p`
  ${() => font.bold_15};
`;
export const ProfileIntroduceContainer = styled.div`
  margin: 1.6rem 0 5rem 0;
`;
