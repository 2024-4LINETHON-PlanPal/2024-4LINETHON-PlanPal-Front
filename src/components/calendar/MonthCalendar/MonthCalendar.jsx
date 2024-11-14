import React, { useState, useEffect } from "react";
import axios from "axios";
import * as D from "./MothCalendarStyle.js";

const MonthCalendar = ({ year, month }) => {
  const [plans, setPlans] = useState({});
  const username = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/plans/${username}/monthly/`, {
        params: { year, month },
      })
      .then((response) => {
        if (response.status === 200) {
          setPlans(response.data.result || {});
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username, year, month]);

  const daysInMonth = new Date(year, month, 0).getDate();
  const startDay = new Date(year, month - 1, 0).getDay();

  const daysArray = [];
  const prevMonthDays = new Date(year, month - 1, 0).getDate();

  for (let i = startDay - 1; i >= 0; i--) {
    daysArray.push({ day: prevMonthDays - i, className: "gray-day" });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayOfWeek = (startDay + i - 1) % 7;
    let className = "";
    if (dayOfWeek === 5) className = "blue-day";
    if (dayOfWeek === 6) className = "red-day";
    daysArray.push({ day: i, className });
  }

  for (let i = 1; daysArray.length % 7 !== 0; i++) {
    daysArray.push({ day: i, className: "gray-day" });
  }

  const renderPlans = (day) => {
    const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayPlans = plans[dateKey]?.displayed_plans || [];
    
    return dayPlans.map((plan, index) => (
      <div
        key={index}
        className="plan"
        style={{ borderLeft: `4px solid ${
          plan.category?.color || "transparent"
        }`,
          backgroundColor: plan.is_completed ? "#D9D9D9" : `${plan.category?.color}80`, // 완료된 계획은 #f1f1f1 배경색
        }}
      >
        {plan.title}
      </div>
    ));
  };

  return (
    <D.Cal>
      <D.CalTitle>
        <D.CalInnerText>MON</D.CalInnerText>
        <D.CalInnerText>TUE</D.CalInnerText>
        <D.CalInnerText>WED</D.CalInnerText>
        <D.CalInnerText>THU</D.CalInnerText>
        <D.CalInnerText>FRI</D.CalInnerText>
        <D.CalInnerText className="blue-day">SAT</D.CalInnerText>
        <D.CalInnerText className="red-day">SUN</D.CalInnerText>
      </D.CalTitle>
      {Array.from({ length: Math.ceil(daysArray.length / 7) }, (_, i) => (
        <D.CalRow key={i}>
          {daysArray.slice(i * 7, i * 7 + 7).map((dayObj, idx) => (
            <D.CalItem key={idx} className={dayObj.className}>
              {dayObj.day}
              {dayObj.className === "" && renderPlans(dayObj.day)}
            </D.CalItem>
          ))}
        </D.CalRow>
      ))}
    </D.Cal>
  );
};

export default MonthCalendar;
