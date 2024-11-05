import React from "react";
import * as P from "components/promise/promise-modal/PromiseStyle";
import styled from "styled-components";
import color from "styles/color";
import font from "styles/font";

// 색상 정의
const bgColors = [
    "linear-gradient(328deg, #FF6A3B 0%, #FF6A3B 28.07%, #FFB49D 100%)",
    "linear-gradient(328deg, #4076BA 0%, #4076BA 28.07%, #9FBADD 100%)",
    "linear-gradient(328deg, #C04277 0%, #C04277 28.07%, #DFA0BB 100%)",
    "linear-gradient(328deg, #16857A 0%, #16857A 28.07%, #8AC2BC 100%)",
    "linear-gradient(328deg, #A97C50 0%, #A97C50 28.07%, #D4BDA7 100%)"
];

const TimeDiv = styled.div`
  width: 250px;
  height: 160px;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background: ${(props) => bgColors[props.colorIndex % bgColors.length]};
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 10px 0px ${bgColors[props.colorIndex % bgColors.length].split(' ')[1]}` : "none"};
  cursor: pointer;
  transition: box-shadow 0.3s ease;
`;

const CenteredMembersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const LightMemberDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 20px;
    border-radius: 50px;
    padding: 13px 10px;
    color: ${color.primary_black};
    background-color: ${color.grayscale_f6};
    ${font.regular_12};
`;

export default function TimeSuggestion({ colorIndex, onClick, isSelected }) {
    return (
      <TimeDiv onClick={onClick} isSelected={isSelected} colorIndex={colorIndex}>
          <P.Black23text>2024. 10. 25 fri</P.Black23text>
          <P.Light20text>18:00 - 22:00</P.Light20text>
          <P.Medium13text>참여자 전원이 참여 가능한 약속 시간입니다</P.Medium13text>
          <CenteredMembersWrapper>
              <LightMemberDiv>바구현</LightMemberDiv>
              <LightMemberDiv>수진</LightMemberDiv>
              <LightMemberDiv>꼉</LightMemberDiv>
          </CenteredMembersWrapper>
      </TimeDiv>
    );
}
