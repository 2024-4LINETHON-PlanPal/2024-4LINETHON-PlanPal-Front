import React, { useState, useEffect } from "react";
import MonthCalendar from "components/calendar/MonthCalendar/MonthCalendar";
import WeekCalendar from "components/calendar/WeekCalendar/WeekCalendar";
import DayCalendar from "components/calendar/DayCalendar/DayCalendar";
import allow from "assets/calendar/arrow-right.svg";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

const WrapDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
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

const AllowButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default function HomePage() {
  const cate = ["월", "주", "일"];
  const [selectedCategory, setSelectedCategory] = useState("월");
  const [currentDate, setCurrentDate] = useState(new Date());
 
  const [today] = useState(new Date());
  const username = localStorage.getItem("username");

  const getMondayDate = (date) => {
    const dayOfWeek = date.getDay();
    const diff = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    const monday = new Date(date);
    monday.setDate(date.getDate() - diff);
    return monday.toISOString().split("T")[0]; 
  };

  const [mondayDate, setMondayDate] = useState(getMondayDate(new Date()));
  useEffect(() => {
    setMondayDate(getMondayDate(currentDate) ); 
  }, [currentDate]);

  const handleCategoryChange = () => {
    const currentIndex = cate.indexOf(selectedCategory);
    const nextIndex = (currentIndex + 1) % cate.length;
    setSelectedCategory(cate[nextIndex]);
  };

  const handleDateChange = (increment) => {
    const newDate = new Date(currentDate);
  
    if (selectedCategory === "월") {
      newDate.setMonth(newDate.getMonth() + increment);
    } else if (selectedCategory === "주") {
      newDate.setDate(newDate.getDate() + 7 * increment);
    } else if (selectedCategory === "일") {
      newDate.setDate(newDate.getDate() + increment);  
    }
  
    setCurrentDate(newDate); 
  };
  

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const formattedToday = new Date(today).toISOString().split("T")[0];

    switch (selectedCategory) {
      case "월":
        return <MonthCalendar username={username} year={year} month={month} />;
      case "주":
        return <WeekCalendar username={username} currentDate={mondayDate} />;
      case "일":
        return <DayCalendar username={username} today={formattedToday} />;
      default:
        return <MonthCalendar username={username} year={year} month={month} />;
    }
  };

  return (
    <WrapDiv>
      <TopBar>
        <Title>
          {selectedCategory === "일"
            ? `${currentDate.getFullYear()} ${currentDate.getMonth() + 1} ${currentDate.getDate()}`
            : `${currentDate.getFullYear()} ${currentDate.getMonth() + 1}`}
        </Title>
        <TopRight>
          <Btn onClick={handleCategoryChange}>{selectedCategory}</Btn>
          <AllowButton src={allow} onClick={() => handleDateChange(-1)} />
          <AllowButton src={allow} onClick={() => handleDateChange(1)} style={{ transform: "rotate(180deg)" }} />
        </TopRight>
      </TopBar>
      {renderCalendar()}
    </WrapDiv>
  );
}
