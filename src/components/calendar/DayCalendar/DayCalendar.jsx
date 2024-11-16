import React, { useState, useEffect } from "react";
import axios from "axios";
import * as C from "./DayCalendarStyle.js";
import plus from "assets/calendar/plus.svg";
import dots from "assets/calendar/dots.svg";
import CateModal from "../Modals/CateModal";
import PlanModal from "../Modals/PlanModal";
import ShareModal from "../Modals/ShareModal";
import Checked from "assets/calendar/checked.svg";

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
    setSelectedPlanId(null);
  };

  const hours = Array.from({ length: 25 }, (_, i) => String(i).padStart(2, "0"));

  const fetchPlans = () => {
    axios
      .get(`https://planpal.kro.kr/plan/plans/${username}/daily/?date=${today}`)
      .then((response) => {
        if (response.status === 200) {
          setSchedules(response.data.result.time_slots || {});
          // console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/categories/${username}/`)
      .then((response) => {
        if (response.status === 200) {
          fetchPlans();
          setCategories(response.data.result);
          // console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username, today]);

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/plans/${username}/`)
      .then((response) => {
        if (response.status === 200) {
          setPlans(response.data.result);
          // console.log(response.data.message);
          // console.log(response.data.result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username, today]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setModalOpen(true);
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
          fetchPlans();
          setPlans((prevPlans) =>
            prevPlans.map((p) => (p.id === plan.id ? { ...p, is_completed: !p.is_completed } : p))
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDotsClick = (planId) => {
    setSelectedPlanId(planId);
    setPlanModalOpen(true);
  };

  return (
    <C.Wrap>
      <C.TimeWrap>
        {hours.map((hour) => (
          <C.Time key={hour}>{hour}</C.Time>
        ))}
      </C.TimeWrap>

      <C.MakerWrap>
        {hours.map((hour) => {
          const timeSlot = schedules[`${hour}:00`] || [];
          return (
            <C.Hours key={hour}>
              {timeSlot.length > 0 &&
                timeSlot.map((slot, idx) => (
                  <C.HalfHours
                    key={idx}
                    style={{
                      borderLeft: `4px solid ${slot?.category?.color || "#4076ba"}`,
                      backgroundColor: slot.is_completed ? "#D9D9D9" : `${slot?.category?.color}80`,
                      marginTop: idx > 0 ? "-1px" : "0",
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
                onClick={() => handleCategoryClick(category.id)}
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
                      <div className="box" onClick={() => handleCompletionToggle(plan)}>
                        {plan.is_completed ? <img src={Checked} alt="checked icon" /> : <></>}
                      </div>
                      <div className="todo">{plan.title}</div>
                      <div className="img" onClick={() => handleDotsClick(plan.id)}>
                        <img src={dots} alt="dots icon" />
                      </div>
                    </div>
                  ))}
                {plans
                  .filter((plan) => plan.category?.id === category.id)
                  .map((plan, index) => (
                    <div className="wrap" key={index}>
                      <div className="box" onClick={() => handleCompletionToggle(plan)}>
                        {plan.is_completed ? <img src={Checked} alt="checked icon" /> : <></>}
                      </div>
                      <div className="todo">{plan.title}</div>
                      <div className="img" onClick={() => handleDotsClick(plan.id)}>
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

      {isModalOpen && <CateModal onClose={closeModal} categoryId={selectedCategoryId} />}
      {isPlanModalOpen && <PlanModal onClose={closeModal} plan_id={selectedPlanId} />}
      {isShareModalOpen && <ShareModal onClose={closeModal} plan_id={selectedPlanId} />}
    </C.Wrap>
  );
};

export default DayCalendar;
