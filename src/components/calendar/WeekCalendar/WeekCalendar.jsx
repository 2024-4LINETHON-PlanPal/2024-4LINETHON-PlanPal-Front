import React, { useEffect, useState } from "react";
import * as W from "./WeekCalendarStyle.js";
import axios from "axios";
import PlanModal from "../Modals/PlanModal"; 

const WeekCalendar = ({ username, currentDate }) => {
  const [plans, setPlans] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://planpal.kro.kr/plan/plans/${username}/weekly/`, {
        params: { date: currentDate },
      })
      .then((response) => {
        setPlans(response.data.result || {});
        setLoading(false);
        console.log(response.data.result);
        console.log(currentDate);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [username, currentDate]);

  const hours = Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, "0")}:00`
  );

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);

  };

  return (
    <>
      <W.Wrap>
        <W.RowTime>
          <W.TimeInner />
          {hours.map((hour, index) => (
            <W.TimeInner key={index}>{hour}</W.TimeInner>
          ))}
        </W.RowTime>
        <W.WeekWrap>
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, dayIndex) => {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + dayIndex);
            const dateString = date.toISOString().split("T")[0];
            const dailyPlans = plans[dateString]?.displayed_plans || [];

            return (
              <W.ColWrap key={dayIndex}>
                <W.ColTitle>
                  <W.TitleInner
                    className={
                      day === "SAT"
                        ? "blue-day"
                        : day === "SUN"
                        ? "red-day"
                        : ""
                    }
                  >
                    {day}
                  </W.TitleInner>
                  <W.TitleInner
                    className={
                      day === "SAT"
                        ? "blue-day"
                        : day === "SUN"
                        ? "red-day"
                        : ""
                    }
                  >
                    {date.getDate()}
                  </W.TitleInner>
                </W.ColTitle>
                <W.LongItem>
                  {Array.from({ length: 24 }, (_, hourIndex) => {
                    const plansForHour = dailyPlans.filter(
                      (plan) =>
                        new Date(plan.start).getHours() <= hourIndex &&
                        new Date(plan.end).getHours() > hourIndex
                    );

                    return (
                      <W.ShortItem
                        key={hourIndex}
                        onClick={() => openModal(date.getDate(), hourIndex)} // 시간 클릭 시 모달 열기
                      >
                        {plansForHour.map((plan, planIndex) => (
                          <W.PlanItem
                            key={planIndex}
                            style={{
                              backgroundColor: plan.is_completed
                                ? "#D9D9D9"
                                : plan.category?.color
                                ? `${plan.category?.color}80`
                                : "transparent",
                              borderLeft: `4px solid ${
                                plan.category?.color || "transparent"
                              }`,
                            }}
                          >
                            {plan.title}
                          </W.PlanItem>
                        ))}
                      </W.ShortItem>
                    );
                  })}
                </W.LongItem>
              </W.ColWrap>
            );
          })}
        </W.WeekWrap>
      </W.Wrap>

      {showModal &&  (
        <PlanModal
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default WeekCalendar;
