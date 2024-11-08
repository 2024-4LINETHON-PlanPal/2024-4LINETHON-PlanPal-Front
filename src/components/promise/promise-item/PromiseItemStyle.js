import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const ItemDiv = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${color.grayscale_eb};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const StarIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const ItemStrongText = styled.span`
  ${font.bold_15};
`;

export const ItemText = styled.span`
  ${font.regular_15};
`;

export const ItemTitle = styled.p`
  ${font.black_18};
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ItemMemo = styled.div`
  width: 130px;
  height: 50px;
  padding: 7px 10px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${color.primary_white};
  ${font.regular_12};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 10px;
`;

export const ItemBtn = styled.button`
  width: auto;
  height: 25px;
  padding: 3px 13px;
  border-radius: 50px;
  color: ${color.white};
  background-color: ${color.primary_black};
  ${font.medium_12};
`;
