import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const Cal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 200px;
`;

export const CalTitle = styled.div`
  display: flex;
  width: 352px;
  justify-content: space-between;
  align-items: center;
`;

export const CalInnerText = styled.div`
  text-align: center;
  ${font.regular_12};
  width: 52px;
  margin-right: 10px;
  color: ${color.primary_black};

  &.blue-day {
    color: #4076ba;
  }

  &.red-day {
    color: #c04277;
  }
`;

export const CalRow = styled.div`
  display: flex;
  width: 352px;
  justify-content: space-between;
  align-items: center;
`;

export const CalItem = styled.div`
  display: flex;
  flex: 1;
  height: 85px;
  flex-direction: column;
  padding: 0px 5px;
  color: ${color.primary_black};
  text-overflow: clip;
  cursor: pointer;
  :hover{
    cursor: pointer;
  }

  &.gray-day {
    color: ${color.grayscale_bc};
  }

  &.blue-day {
    color: #4076ba;
  }

  &.red-day {
    color: #c04277;
  }
  .plan {
    width: 50px;
    height: 20px;
    margin-left: -5px;
    white-space: nowrap;
    overflow: hidden;
    border-left: 2px solid #4076ba;
  }
`;
