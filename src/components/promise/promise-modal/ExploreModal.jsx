import React, { useState } from "react";
import * as P from "components/promise/promise-modal/PromiseStyle";
import SearchIcon from "assets/promise/search-icon.svg"; 
import DashIcon from "assets/promise/dash-icon.svg";
import UpArrowIcon from "assets/promise/up-arrow-icon.svg";
import DownArrowIcon from "assets/promise/down-arrow-icon.svg";

export default function ExploreModal({ title, setTitle, friendSearch, setFriendSearch }) {
  const [promiseName, setPromiseName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hours, setHours] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <P.PromiseWrapper>
      <P.SubTitle>약속명</P.SubTitle>
      <P.BoldInputDiv>
        <input 
          className="textfield"
          type="text"
          value={promiseName}
          placeholder="약속명을 입력해주세요"
          onChange={(e) => setPromiseName(e.target.value)}
          onClick={handleTitleClick}
          onBlur={handleBlur}
        />
      </P.BoldInputDiv>
      
      <P.SubTitle>참여자</P.SubTitle>
      <P.FriendInputWrapper>
        <P.OvalInput 
          placeholder="친구의 플랜팔 닉네임을 입력해주세요"
          // value={friendSearch}
          // onChange={(e) => setFriendSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="searchicon"/>
      </P.FriendInputWrapper>

      <P.SubTitle>약속 가능 시간</P.SubTitle>
      <P.DateAndTimeWrapper>
        <P.OvalInput
          type="text"
          placeholder="YY . MM . DD"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <img src={DashIcon} alt="dash" />
        <P.OvalInput
          type="text"
          placeholder="YY . MM . DD"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
      </P.DateAndTimeWrapper>

      <P.DateAndTimeWrapper>
        <P.OvalInput
          type="text"
          placeholder="AM 00 : 00"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          onFocus={(e) => (e.target.type = "time")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <img src={DashIcon} alt="dash" />
        <P.OvalInput
          type="text"
          placeholder="AM 00 : 00"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          onFocus={(e) => (e.target.type = "time")}
          onBlur={(e) => (e.target.type = "text")}
        />
      </P.DateAndTimeWrapper>

      <P.SubTitle>약속 길이</P.SubTitle>
      <P.TimeLengthWrapper>
        <P.TimeLength
          type="text"
          value={`${hours.toString().padStart(2, '0')}`}
          readOnly
          placeholder="00"
          isPlaceholder={hours === 0}
        />
        <P.SpanText15>h</P.SpanText15>
        <P.ArrowWrapper>
          <P.ArrowButton onClick={() => setHours(hours + 1)}>
            <img src={UpArrowIcon} alt="increment" />
          </P.ArrowButton>
          <P.ArrowButton onClick={() => setHours(hours > 0 ? hours - 1 : 0)}>
            <img src={DownArrowIcon} alt="decrement" />
          </P.ArrowButton>
        </P.ArrowWrapper>
      </P.TimeLengthWrapper>
    </P.PromiseWrapper>
  );
}
