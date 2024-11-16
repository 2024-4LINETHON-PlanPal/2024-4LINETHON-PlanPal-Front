import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const RowTime = styled.div`
  display: flex;
  width: 45px;
  flex-direction: column;
  align-items: center;
  margin-top: -9px;

`;
export const Loading = styled.div`

`

export const TimeInner = styled.div`
  display: flex;
  height: 57px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: -8px;
`;

export const Wrap = styled.div`
  width: 90%;
  display: flex;
  margin-bottom : 100px;
`;

export const WeekWrap = styled.div`
  display: flex;
  width: 90%;
  
`;

export const ColTitle = styled.div`
  height: 49px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 36px;
`;

export const TitleInner = styled.div`
  display: flex;
  width: fit-content;
  color: ${color.primary_black};

  &.blue-day {
    color: #4076BA; 
  }

  &.red-day {
    color: #C04277; 
  }
`;

export const LongItem = styled.div`
  border-top: 1px solid ${color.grayscale_bc}; 
  display: flex;
  flex-direction: column; 
`;

export const ShortItem = styled.div`
  height: 49px; 
  border-bottom: 1px solid ${color.grayscale_bc}; 
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column; 
`;

export const PlanItem = styled.div`
  width : 100%;
  overflow: hidden;

  flex: 1;
  border-left: 4px solid #C04277;
`;

