import React, { useState } from "react";
import MonthCalendar from "components/calendar/MonthCalendar";
import WeekCalendar from "components/calendar/WeekCalendar";
import DayCalendar from "components/calendar/DayCalendar";
import allow from "assets/calendar/arrow-right.svg";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

const WrapDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const TopBar = styled.div`
  display: flex;
  width: 342px;
  height: 44px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: ${color.primary_black};
  ${font.black_25};
`;

const TopRight = styled.div`
  display: flex;
  width: 84px;
  align-items: center;
`;

const Btn = styled.div`
  display: flex;
  width: 30px;
  height: 25px;
  padding: 1px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${color.primary_black};
  color: ${color.white};
  ${font.regular_10};
  cursor: pointer;
`;

const AllowRight = styled.img`
  width: 24px;
  height: 24px;
`;

const AllowLeft = styled.img`
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
`;

export default function HomePage() {
  const cate = ["월", "주", "일"];
  const [selectedCategory, setSelectedCategory] = useState("월");

  const handleCategoryChange = () => {
    const currentIndex = cate.indexOf(selectedCategory);
    const nextIndex = (currentIndex + 1) % cate.length;
    setSelectedCategory(cate[nextIndex]);
  };

  const renderCalendar = () => {
    switch (selectedCategory) {
      case "월":
        return <MonthCalendar />;
      case "주":
        return <WeekCalendar />;
      case "일":
        return <DayCalendar />;
      default:
        return <MonthCalendar />;
    }
  };

  return (
    <>
      <WrapDiv>
        <TopBar>
          <Title>2024 10</Title>
          <TopRight>
            <Btn onClick={handleCategoryChange} >{selectedCategory}</Btn>
            <AllowRight src={allow} />
            <AllowLeft src={allow} />
          </TopRight>
        </TopBar>
        {renderCalendar()}
      </WrapDiv>
    </> 
  );
}
