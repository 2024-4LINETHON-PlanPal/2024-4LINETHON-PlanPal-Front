import React, { useState, useEffect } from "react";
import axios from "axios";
import * as C from "./DayCalendarStyle.js";
import plus from "assets/calendar/plus.svg";
import dots from "assets/calendar/dots.svg";
import CateModal from "../Modals/CateModal";
import PlanModal from "../Modals/PlanModal";
import ShareModal from "../Modals/ShareModal";
import Checked from "assets/calendar/checked.png";

const DayCalendar = ({ username, today }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isPlanModalOpen, setPlanModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const [categories, setCategories] = useState([]);
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const handleShareClick = () => {
    setPlanModalOpen(false);
    setShareModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPlanModalOpen(false);
    setShareModalOpen(false);
    setSelectedCategoryId(null);
  };

  const hours = Array.from({ length: 25 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/plans/${username}/daily/?date=${today}`)
      .then((response) => {
        if (response.status === 200) {
          setSchedules(response.data.result.time_slots || {});

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username, today, plans]);

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/categories/${username}/`)
      .then((response) => {
        if (response.status === 200) {
          setCategories(response.data.result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username, isModalOpen, isPlanModalOpen]);

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/plans/${username}/`)
      .then((response) => {
        if (response.status === 200) {
          setPlans(response.data.result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username, isModalOpen, isPlanModalOpen]);

  const handleDotsClick = (planId) => {
    setSelectedPlanId(planId);
    setPlanModalOpen(true);
  };

  const handleCompletionToggle = (plan) => {
    const updatedPlan = {
      title: plan.title,
      category: plan.category.id,
      start: plan.start,
      end: plan.end,
      participant: plan.participant,
      memo: plan.memo,
      is_completed: !plan.is_completed,
    };
    axios
      .put(`https://planpal.kro.kr/plan/plans/${username}/${plan.id}/`, updatedPlan)
      .then((response) => {
        if (response.status === 200) {
          setPlans((prevPlans) =>
            prevPlans.map((p) => (p.id === plan.id ? { ...p, is_completed: !p.is_completed } : p))
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <C.Wrap>
      <C.TimeWrap>
        {hours.map((hour) => (
          <C.Time key={hour}>{hour}</C.Time>
        ))}
      </C.TimeWrap>
      <C.MakerWrap>
        {hours.map((hour, index) => {
          const timeSlot = schedules[`${hour}:00`] || [];

          return (
            <C.Hours key={hour}>
              {timeSlot
              
                .filter((slot) => slot.date === today)
                .map((slot, idx) => (
                  <C.HalfHours
                    key={idx}
                    style={{
                      borderLeft: `4px solid ${slot?.category?.color || "#4076ba"}`,
                      backgroundColor: slot.is_completed ? "#D9D9D9" : `${slot?.category?.color}80`,
                      marginTop: idx > 0 ? '-1px' : '0',
                    }}
                  >
                    {slot.title}
                  </C.HalfHours>
                ))}
            </C.Hours>
          );
        })}
      </C.MakerWrap>

      <C.CheckWrap>
        {categories.length > 0 ? (
          categories.map((category) => (
            <C.CheckBox key={category.id}>
              <C.CheckTitle
                onClick={() => {
                  setSelectedCategoryId(category.id);
                  setModalOpen(true);
                }}
                style={{
                  borderLeft: `2px solid ${category.color || "#4076ba"}`,
                }}
              >
                <div className="title">{category.title}</div>
                <div className="btn" onClick={() => setPlanModalOpen(true)}>
                  <img src={plus} alt="plus icon" />
                </div>
              </C.CheckTitle>
              <C.TodoItem>
                {plans
                  .filter((plan) => plan.category.id === category.id)
                  .map((plan, index) => (
                    <div className="wrap" key={index}>
                      <div
                        className="box"
                        onClick={() => handleCompletionToggle(plan)}
                      >
                        {plan.is_completed ? <img src={Checked} alt="checked icon" /> : <></>}
                      </div>
                      <div className="todo">{plan.title}</div>
                      <div
                        className="img"
                        onClick={() => handleDotsClick(plan.id)}
                      >
                        <img src={dots} alt="dots icon" />
                      </div>
                    </div>
                  ))}
              </C.TodoItem>
            </C.CheckBox>
          ))
        ) : (
          <></>
        )}
        <C.Category onClick={() => setModalOpen(true)}>
          <img src={plus} alt="plus icon" />
          <p>카테고리 추가</p>
        </C.Category>
      </C.CheckWrap>

      {isModalOpen && (
        <CateModal onClose={closeModal} categoryId={selectedCategoryId} />
      )}
      {isPlanModalOpen && (
        <PlanModal onClose={closeModal} plan_id={selectedPlanId} />
      )}
      {isShareModalOpen && <ShareModal onClose={closeModal} />}
    </C.Wrap>
  );
};

export default DayCalendar;
