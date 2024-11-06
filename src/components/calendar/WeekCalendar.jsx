import React from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

const RowTime = styled.div`
  display: flex;
  width: 45px;
  flex-direction: column;
  align-items: center;
  margin-top: -9px;
`;

const TimeInner = styled.div`
  display: flex;
  height: 57px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: -8px;
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  margin-bottom : 100px;
`;

const WeekWrap = styled.div`
  display: flex;
  width: 90%;
`;

const ColTitle = styled.div`
  height: 49px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 36px;
`;

const TitleInner = styled.div`
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

const LongItem = styled.div`
  border-top: 1px solid ${color.grayscale_bc}; 
  display: flex;
  flex-direction: column; 
`;

const ShortItem = styled.div`
  height: 49px; 
  border-bottom: 1px solid ${color.grayscale_bc}; 
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column; 
`;

const PlanItem = styled.div`
  width : 100%;
  overflow: hidden;
  background: #DFA0BB;
  flex: 1;
  border-left: 4px solid #C04277;
`;



const WeekCalendar = () => {
  const hours = Array.from({ length: 25 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  // 날짜와 시간대를 고려한 예시 계획
  const examplePlans = [
    // MON
    [
      ["Plan A", "Plan B", "Plan C", "Plan D"],
      ["Plan E"], 
      [], 
      ["Plan I", "Plan J"], 
      ["Plan K"], 
      ["Plan L", "Plan M", "Plan N", "Plan O"], 
      ["Plan P"], 
      
      ...Array.from({ length: 18 }, () => []),
    ],
    // TUE
    [
      ["Plan Q", "Plan R", "Plan S"], 
    
      ...Array.from({ length: 23 }, () => []),
    ],
    // WED
    [
      ...Array.from({ length: 23 }, () => []),
      ["Plan I", "Plan J"], 
    ],
    // THU
    [
      // ...
    ],
    // FRI
    [
    
    ],
    // SAT
    [
      
    ],
    // SUN
    [
     
    ],
  ];

  return (
    <Wrap>
      <RowTime>
        <TimeInner />
        {hours.map((hour, index) => (
          <TimeInner key={index}>{hour}</TimeInner>
        ))}
      </RowTime>
      <WeekWrap>
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, dayIndex) => (
          <ColWrap key={dayIndex}>
            <ColTitle>
              <TitleInner className={day === "SAT" ? "blue-day" : day === "SUN" ? "red-day" : ""}>{day}</TitleInner>
              <TitleInner className={day === "SAT" ? "blue-day" : day === "SUN" ? "red-day" : ""}>{14 + dayIndex}</TitleInner>
            </ColTitle>
            <LongItem>
              {Array.from({ length: 24 }, (_, hourIndex) => (
                <ShortItem key={hourIndex}>
                  {examplePlans[dayIndex][hourIndex] ? (
                    <>
                      {examplePlans[dayIndex][hourIndex].slice(0, 3).map((plan, planIndex) => (
                        <PlanItem key={planIndex}>
                          {planIndex === 2 && examplePlans[dayIndex][hourIndex].length > 3 ? `...` : plan}
                        </PlanItem>
                      ))}
                    </>
                  ) : null}
                </ShortItem>
              ))}
            </LongItem>
          </ColWrap>
        ))}
      </WeekWrap>
    </Wrap>
  );
};

export default WeekCalendar;
