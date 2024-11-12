import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const InputTitle = styled.p`
  margin-top: 3.5rem;

  ${() => font.bold_15}
`;
export const InputForm = styled.form`
  margin-top: 0.8rem;
  display: flex;
`;
export const InputBox = styled.input`
  padding: 0.9rem 1.8rem;
  width: 24.9rem;
  height: 3.2rem;

  border: 1px solid ${color.grayscale_bc};
  border-radius: 1.8rem;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;

  ${() => font.regular_12}
  background-color: transparent;

  &::placeholder {
    color: ${() => color.grayscale_bc};
  }
`;
export const SubmitButton = styled.button`
  margin-left: 0.7rem;
  padding: 0;
  width: 3.2rem;
  height: 3.2rem;

  border: none;
  border-radius: 50%;

  overflow: hidden;
  cursor: pointer;
`;
export const ButtonImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const ErrorText = styled.p`
  margin-top: 0.4rem;
  height: 1.6rem;
  color: ${() => color.orange_normal};
  ${font.regular_10}
`;
export const NotiText = styled(ErrorText)`
  color: ${() => color.blue_normal};
`;
export const FriendList = styled.ul`
  margin: 0.8rem 0 4rem 0;
  display: flex;
  flex-wrap: wrap;
`;
export const FriendItem = styled.li`
  display: inline-flex;
  margin: 0 1rem 1rem 0;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  height: 2.4rem;

  border-radius: 1.2rem;
  background-color: ${color.grayscale_d9};
  ${font.regular_12}
`;
export const ImgContainer = styled.button`
  margin-left: 0.8rem;
  padding: 0;
  width: 1.3rem;
  height: 1.3rem;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;
export const IconImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
