import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const Cal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
    width: calc(100% + 10px);
    height: 20px;
    margin-left: -5px;
    background-color: #4077ba71;
    overflow: hidden;
    text-overflow: ellipsis;
    border-left: 2px solid #4076ba;
  }
`;
