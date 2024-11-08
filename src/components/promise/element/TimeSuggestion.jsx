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

const primaryColors = ["#FF6A3B", "#4076BA", "#C04277", "#16857A", "#A97C50"];

const TimeDiv = styled.div`
  width: 250px;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background: ${(props) => bgColors[props.colorIndex % bgColors.length]};
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 10px 0px ${primaryColors[props.colorIndex % primaryColors.length]}` : "none"};
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

const GrayDiv = styled.div`
    height: 80px;
    width: calc(100% + 20*2); 
    margin: 10px -20px -20px -20px;
    padding: 15px;
    border-radius: 0 0 15px 15px;
    color: ${(props) => bgColors[props.colorIndex % bgColors.length]};
    background-color: ${color.grayscale_e6};
`

export default function TimeSuggestion({ colorIndex, onClick, isSelected, showVoteCount }) {
  const memberDivStyle = {
    color: color.primary_white,
    backgroundColor: primaryColors[colorIndex % primaryColors.length]
  };

  const textColor = primaryColors[colorIndex % primaryColors.length];
    
  return (
      <TimeDiv onClick={onClick} isSelected={isSelected} colorIndex={colorIndex}>
          <P.Black23text>2024. 10. 25 fri</P.Black23text>
          <P.Light20text>18:00 - 22:00</P.Light20text>
          <P.Medium13text>참여자 전원이 참여 가능한 약속 시간입니다</P.Medium13text>
          <CenteredMembersWrapper>
              <P.MemberDiv style={{color: color.primary_black, backgroundColor: color.primary_white}}>
                바구현
              </P.MemberDiv>
              <P.MemberDiv style={{color: color.primary_black, backgroundColor: color.primary_white}}>
                수진
              </P.MemberDiv>
              <P.MemberDiv style={{color: color.primary_black, backgroundColor: color.primary_white}}>
                꼉
              </P.MemberDiv>
          </CenteredMembersWrapper>
          {showVoteCount && (
              <GrayDiv colorIndex={colorIndex}>
                <P.Medium13text style={{color: textColor}}>총 2명이 투표한 약속 시간입니다</P.Medium13text>
                <CenteredMembersWrapper>
                  <P.MemberDiv style={memberDivStyle}>바구현</P.MemberDiv>
                  <P.MemberDiv style={memberDivStyle}>수진</P.MemberDiv>
                </CenteredMembersWrapper>
              </GrayDiv>
          )}
      </TimeDiv>
    );
}
