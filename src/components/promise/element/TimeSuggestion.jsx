import React from "react";
import * as P from "components/promise/PromiseStyle";
import styled from "styled-components";
import color from "styles/color";

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
`;

export default function TimeSuggestion({
  start, members, length, 
  onClick, isSelected, colorIndex, showVoteCount
}) {
  // Date 객체를 사용하여 약속 날짜와 시간 파싱
  const startDateTime = new Date(start);
  if (isNaN(startDateTime)) return null; // start가 유효하지 않은 경우 컴포넌트를 렌더링하지 않음
  
  const startDate = startDateTime.toLocaleDateString("ko-KR"); // 약속 날짜 (예: 2024-11-16)
  const startTime = startDateTime.toTimeString().slice(0, 5); // 시작 시간 (hh:mm)

  // 종료 시간 계산 (length 시간 후)
  const endDateTime = new Date(startDateTime);
  endDateTime.setHours(startDateTime.getHours() + length);
  const endTime = endDateTime.toTimeString().slice(0, 5); // 종료 시간 (hh:mm)

  const allMembers = Array.isArray(members.all) ? members.all : [];
  const votedMembers = Array.isArray(members.voted) ? members.voted : [];

  const memberDivStyle = {
    color: color.primary_white,
    backgroundColor: primaryColors[colorIndex % primaryColors.length]
  };

  const textColor = primaryColors[colorIndex % primaryColors.length];

  return (
    <TimeDiv onClick={onClick} isSelected={isSelected} colorIndex={colorIndex}>
      <P.Black23text>{startDate}</P.Black23text>
      <P.Light20text>{startTime} - {endTime}</P.Light20text>
      <P.Medium13text>참여자 {allMembers.length}명이 참여 가능한 약속 시간입니다</P.Medium13text>

      <CenteredMembersWrapper>
        {allMembers.map((member, index) => (
          <P.MemberDiv key={index} style={{ color: color.primary_black, backgroundColor: color.primary_white }}>
            {member}
          </P.MemberDiv>
        ))}
      </CenteredMembersWrapper>

      {showVoteCount && (
        <GrayDiv colorIndex={colorIndex}>
          <P.Medium13text style={{ color: textColor }}>
            총 {votedMembers.length}명이 투표한 약속 시간입니다
          </P.Medium13text>
          <CenteredMembersWrapper>
            {votedMembers.map((member, index) => (
              <P.MemberDiv key={index} style={memberDivStyle}>{member}</P.MemberDiv>
            ))}
          </CenteredMembersWrapper>
        </GrayDiv>
      )}
    </TimeDiv>
  );
}
