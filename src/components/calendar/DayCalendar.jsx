import React, { useState } from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";
import plus from "assets/calendar/plus.svg";
import dots from "assets/calendar/dots.svg";
import CateModal from "./CateModal";
import PlanModal from "./PlanModal";
import ShareModal from "./ShareModal";

const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const TimeWrap = styled.div`
  width: 15px;
  margin-top: 7.5px;
`;

const Time = styled.div`
  height: 20.3px;
  display: flex;
  justify-content: center;
`;

const MakerWrap = styled.div`
  margin-top: 14.5px;
  width: 140px;
`;

const Hours = styled.div`
  height: 20.3px;
  display: flex;
  border-top: 1px solid #bcbcbc;
`;

const HalfHours = styled.div`
  flex: 1;
  width: 70px;
  background-color: ${({ hasContent }) =>
    hasContent ? "#DFA0BB" : "transparent"};
`;

const CheckWrap = styled.div`
  width: 169px;
`;

const CheckBox = styled.div`
  flex: 1;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const CheckTitle = styled.div`
  display: flex;
  justify-content: space-between;

  .title {
    background-color: ${color.grayscale_d9};
    padding: 0 10px;
    height: 24px;
    border-left: 2px solid #4076ba;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    ${font.bold_15};
    font-size: 13px;
  }
  .btn {
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 100px;
    border: 0.5px solid ${color.grayscale_bc};
    background: #f6f6f6;
    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const TodoItem = styled.div`
  margin-left: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  .wrap {
    display: flex;
    align-items: center;
    .box {
      display: flex;
      width: 20px;
      height: 20px;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 5px;
      border-radius: 5px;
      background: #d9d9d9;
    }
    .todo {
      width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      ${font.regular_15};
      font-size: 14px;
    }
  }
  .img {
    width: 15.5px;
    right: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    img {
      width: 15.5px;
      height: 3.5px;
    }
  }
`;

const Category = styled.div`
  justify-self: end;
  margin: 10px 0;
  display: flex;
  width: 85px;
  height: 26px;
  padding: 1px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #bcbcbc;
  cursor: pointer;
  img {
    width: 16px;
  }
  p {
    color: #bcbcbc;
    text-align: center;
    ${font.regular_10};
  }
`;

const DayCalendar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPlanModalOpen, setPlanModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  const handleShareClick = () => {
    setPlanModalOpen(false);
    setShareModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPlanModalOpen(false);
    setShareModalOpen(false);
  };

  const hours = Array.from({ length: 25 }, (_, i) =>
    String(i).padStart(2, "0")
  );
  const schedules = [
    ["일정", "일정"], // 0시
    ["일정", ""], // 1시
    ["일정"], // 2시
    ["일정", "일정"], // 3시
    ["일정"], // 4시
    ["", ""], // 5시
    ["일정", "일정"], // 6시
    ["", "일정"], // 7시
    ["일정"], // 8시
    ["일정", "일정"], // 9시
    ["", "일정"], // 10시
    ["", ""], // 11시
    ["", "일정"], // 12시
    ["일정"], // 13시
    ["일정", "일정"], // 14시
    ["", ""], // 15시
    ["일정"], // 16시
    ["", ""], // 17시
    ["일정"], // 18시
    ["일정", "일정"], // 19시
    ["", "일정"], // 20시
    ["일정"], // 21시
    ["일정"], // 22시
    ["", "일정"], // 23시
  ];

  return (
    <Wrap>
      <TimeWrap>
        {hours.map((hour) => (
          <Time key={hour}>{hour}</Time>
        ))}
      </TimeWrap>
      <MakerWrap>
        {schedules.map((schedule, index) => (
          <Hours key={index}>
            <HalfHours hasContent={schedule.length > 0}>
              {schedule[0] || ""}
            </HalfHours>
            <HalfHours hasContent={schedule.length > 1}>
              {schedule[1] || ""}
            </HalfHours>
          </Hours>
        ))}
      </MakerWrap>
      <CheckWrap>
        <CheckBox>
          <CheckTitle>
            <div className="title">STUDY</div>
            <div className="btn" onClick={() => setPlanModalOpen(true)}>
              <img src={plus} alt="" />
            </div>
          </CheckTitle>
          <TodoItem>
            <div className="wrap">
              <div className="box"></div>
              <div className="todo">국제경영학 경영학 경영학 수업</div>
              <div className="img" onClick={() => setPlanModalOpen(true)}>
                <img src={dots} alt="" />
              </div>
            </div>

            <div className="wrap">
              <div className="box"></div>
              <div className="todo">국제경영학 수업</div>
              <div className="img" onClick={() => setPlanModalOpen(true)}>
                <img src={dots} alt="" />
              </div>
            </div>
          </TodoItem>
        </CheckBox>
        <CheckBox>
          <CheckTitle>
            <div className="title">STUDY</div>
            <div className="btn" onClick={() => setPlanModalOpen(true)}>
              <img src={plus} alt="" />
            </div>
          </CheckTitle>
          <TodoItem>
            <div className="wrap">
              <div className="box"></div>
              <div className="todo">국제경영학 경영학 경영학 수업</div>
              <div className="img" onClick={() => setPlanModalOpen(true)}>
                <img src={dots} alt="" />
              </div>
            </div>

            <div className="wrap">
              <div className="box"></div>
              <div className="todo">국제경영학 수업</div>
              <div className="img" onClick={() => setPlanModalOpen(true)}>
                <img src={dots} alt="" />
              </div>
            </div>
          </TodoItem>
        </CheckBox>

        <Category onClick={() => setModalOpen(true)}>
          <img src={plus} alt="" />
          <p>카테고리 추가</p>
        </Category>
      </CheckWrap>

      {isModalOpen && <CateModal onClose={() => setModalOpen(false)} />}
      {isPlanModalOpen && (
        <PlanModal onClose={closeModal} onShare={handleShareClick} />
      )}
      {isShareModalOpen && <ShareModal onClose={closeModal} />}
    </Wrap>
  );
};

export default DayCalendar;
