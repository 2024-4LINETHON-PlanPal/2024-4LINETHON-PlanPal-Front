import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const FriendProfileContainer = styled.div`
  margin: 7rem 0 7.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgContainer = styled.div`
  width: 5rem;
  height: 5rem;

  border: none;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const InfoText = styled.p`
  margin-top: 1.5rem;

  text-align: center;
  ${font.bold_20}
  line-height: 1.4
`;
export const InfoSpan = styled.span`
  ${font.extrabold_20}
`;
export const SubmitButton = styled.button`
  box-sizing: border-box;
  width: 28.8rem;
  height: 5.4rem;

  border: none;
  border-radius: 1.5rem;
  background-color: ${(props) => (props.$isFriend ? color.grayscale_d9 : color.primary_black)};

  ${() => font.medium_18};
  color: ${() => color.primary_white};

  ${(props) => props.$isFriend || "cursor: pointer"}
`;
