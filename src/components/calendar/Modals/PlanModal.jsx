import React, { useEffect, useState } from "react";
import axios from "axios";
import x from "assets/calendar/x.svg";
import under from "assets/calendar/underr.svg";
import serch from "assets/calendar/serch.svg";
import ShareModal from "./ShareModal";
import DashIcon from "assets/promise/dash-icon.svg";
import * as P from "./PlanModalStyle.js";

// 30분 단위 시간 목록
const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      times.push(time);
    }
  }
  return times;
};

const PlanModal = ({ onClose, plan_id }) => {
  const [planName, setPlanName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("카테고리를 선택해주세요");
  const [items, setItems] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [memo, setMemo] = useState("");
  const username = localStorage.getItem("username");

  const [timeOptions] = useState(generateTimeOptions()); // 30분 단위 시간 옵션

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleItemClick = (item) => {
    setSelectedItem(item.title);
    setIsOpen(false);
  };

  const handleShareClick = () => setShowShareModal(true);
  const handleClose = () => {
    setShowShareModal(false);
    onClose();
  };

  useEffect(() => {
    axios
      .get(`https://planpal.kro.kr/plan/categories/${username}/`)
      .then((response) => {
        if (response.status === 200) {
          setItems(response.data.result);
        }
      })
      .catch((error) => console.error("카테고리 조회 실패:", error));
  }, [username]);

  useEffect(() => {
    if (plan_id) {
      axios
        .get(`https://planpal.kro.kr/plan/plans/${username}/${plan_id}/`)
        .then((response) => {
          if (response.status === 200) {
            const planData = response.data.result;
            setPlanName(planData.title);
            setSelectedItem(planData.category?.title || "카테고리를 선택해주세요");
            setStartDate(planData.start.split("T")[0]);
            setEndDate(planData.end.split("T")[0]);
            setStartTime(planData.start.split("T")[1].slice(0, 5));
            setEndTime(planData.end.split("T")[1].slice(0, 5));
            setMemo(planData.memo || "");
            setIsEditing(true);
          }
        })
        .catch((error) => console.error("플랜 조회 실패:", error));
    }
  }, [plan_id, username]);

  const handleSaveClick = () => {
    const selectedCategory = items.find((item) => item.title === selectedItem);
    const start = `${startDate}T${startTime}:00`;
    const end = `${endDate}T${endTime}:00`;

    const payload = {
      title: planName,
      category: selectedCategory ? selectedCategory.id : null,
      start,
      end,
      participant: ["test22"],
      memo,
      is_completed: false,
    };
    console.log(payload);

    const request = plan_id
      ? axios.put(`https://planpal.kro.kr/plan/plans/${username}/${plan_id}/`, payload)
      : axios.post(`https://planpal.kro.kr/plan/plans/${username}/`, payload);

    request
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log(payload);
          alert("플랜이 성공적으로 저장되었습니다!");
          onClose();
        }
      })
      .catch((error) => console.error("플랜 저장 실패:", error));
  };

  const handleDeleteClick = () => {
    const deleteUrl = `https://planpal.kro.kr/plan/plans/${username}/${plan_id}/`;

    axios
      .delete(deleteUrl)
      .then((response) => {
        if (response.status === 200) {
          alert("플랜이 삭제되었습니다!");
          onClose();
        }
      })
      .catch((error) => {
        console.error("플랜 삭제 실패:", error);
        alert("플랜 삭제에 실패했습니다.");
      });
  };

  const today = new Date().toISOString().split("T")[0];

  const isStartDateValid = (date) => date >= today;
  const isEndDateValid = (start, end) => start <= end;

  return (
    <>
      {showShareModal ? (
        <ShareModal onClose={handleClose} />
      ) : (
        <P.Background>
          <P.ModalWrap>
            <P.Title>
              <div className="text">계획수립</div>
              <P.CloseButton src={x} alt="닫기" onClick={onClose} />
            </P.Title>
            <h5>계획을 수립해보세요</h5>

            <P.Selection>
              <P.Name>
                <div className="title">이름</div>
                <input
                  className="textfield"
                  type="text"
                  value={planName}
                  placeholder="계획명을 입력해주세요"
                  onChange={(e) => setPlanName(e.target.value)}
                />
              </P.Name>
              <div className="title">카테고리</div>
              <P.DropdownContainer>
                <P.DropdownButton onClick={toggleDropdown}>
                  {selectedItem}
                  <img src={under} alt="dropdown arrow" />
                </P.DropdownButton>
                {isOpen && (
                  <P.DropdownList>
                    {items.map((item) => (
                      <P.ListItem
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                      >
                        {item.title}
                      </P.ListItem>
                    ))}
                  </P.DropdownList>
                )}
              </P.DropdownContainer>
              <div className="title">기간</div>
              <P.DateAndTimeWrapper>
                <P.OvalInput
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    if (isStartDateValid(e.target.value)) {
                      setStartDate(e.target.value);
                    }
                  }}
                  min={today}
                />
                <img src={DashIcon} alt="dash" />
                <P.OvalInput
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    if (isEndDateValid(startDate, e.target.value)) {
                      setEndDate(e.target.value);
                    }
                  }}
                  min={startDate}
                />
              </P.DateAndTimeWrapper>

              <P.DateAndTimeWrapper>
                <P.OvalInput
                  as="select"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </P.OvalInput>
                <img src={DashIcon} alt="dash" />
                <P.OvalInput
                  as="select"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </P.OvalInput>
              </P.DateAndTimeWrapper>

              <div className="title">참여자</div>
              <P.People>
                <div className="wrap">
                  <P.LongRoundBox></P.LongRoundBox>
                  <img src={serch} alt="" />
                </div>
              </P.People>

              <div className="title">메모</div>
              <P.LongTextfield
                type="text"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              ></P.LongTextfield>
            </P.Selection>

            <P.ButtonContainer>
              <P.ShareBtn onClick={handleShareClick} color="#8F8F8F">
                떠벌리기
              </P.ShareBtn>
              {isEditing && (
                <P.DelBtn onClick={handleDeleteClick} color="#9E9E9E">
                  삭제
                </P.DelBtn>
              )}
              <P.SaveBtn onClick={handleSaveClick} color="#FF6A3B">
                저장
              </P.SaveBtn>

            </P.ButtonContainer>
          </P.ModalWrap>
        </P.Background>
      )}
    </>
  );
};

export default PlanModal;
