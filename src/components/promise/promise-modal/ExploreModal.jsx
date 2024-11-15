import React, { useState, useEffect, useRef } from "react";
import { GET, POST } from "apis/api"; // GET, POST 임포트
import * as P from "components/promise/PromiseStyle";
import PromiseTitle from "../element/PromiseTitle";
import PromiseMember from "../element/PromiseMember";
import TimeSuggestion from "../element/TimeSuggestion";
import SuggestModal from "components/promise/promise-modal/SuggestModal";
import SearchIcon from "assets/promise/search-icon.svg"; 
import DashIcon from "assets/promise/dash-icon.svg";
import UpArrowIcon from "assets/promise/up-arrow-icon.svg";
import DownArrowIcon from "assets/promise/down-arrow-icon.svg";

export default function ExploreModal({ 
  promiseName, setPromiseName, friendSearch, 
  setFriendSearch, members, setMembers, onSubmit 
}) {

  const [friendsList, setFriendsList] = useState([]); // 친구 목록 상태 추가
  const [filteredFriends, setFilteredFriends] = useState([]);  // 검색 결과 친구 목록
  const [selectedFriends, setSelectedFriends] = useState([]);  // 선택된 친구 목록
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hours, setHours] = useState(0);
  const [errorText, setErrorText] = useState("");
  const [currentModal, setCurrentModal] = useState(null);
  const [inputValue, setInputValue] = useState(friendSearch);
  const [searchError, setSearchError] = useState("");
  const username = localStorage.getItem("username");

  // 다음 모달로
  const openNextModal = (modalName) => setCurrentModal(modalName);

  // 입력값 임시저장
  const inputRef = useRef("");

  const handleBlur = () => {
    setPromiseName(inputRef.current); // 포커스가 벗어날 때 최종 업데이트
  };

  // 친구 목록 불러오기
  const fetchFriendsList = async () => {
    try {
      const response = await GET(`users/friends/${username}/`);
      const friendsData = Array.isArray(response.data.result) ? response.data.result : [];
      setFriendsList(friendsData);
      setFilteredFriends([]); // 검색 결과 초기화
      setErrorText("");
    } catch (error) {
      setErrorText("친구 목록을 불러오는 중 오류가 발생했습니다.");
    }
  };

  // 친구 검색 기능 (버튼 클릭 시 실행)
  const fetchSearchFriends = () => {
    if (inputValue) {
      const results = friendsList.filter(friend =>
        friend.nickname.includes(inputValue)
      );
      setFilteredFriends(results);
      setSearchError(results.length === 0 ? "닉네임을 다시 입력하세요" : "");
    } else {
      setFilteredFriends([]);  // 검색어가 없으면 검색 결과 초기화
      setSearchError("");
    }
  };

  // 친구 추가 함수
  const handleAddFriend = (friend) => {
    if (!members.some(f => f.id === friend.id)) {
      setMembers([...members, friend]);  // members 배열에 친구 추가
    }
  };

  // 약속 생성 요청 보내기
  const handleSubmit = async () => {

    // 약속 생성 데이터
    const promiseData = {
      username: username,
      members_username: members.map(m => m.username),
      title: promiseName,
      start: startDate + " " + startTime,
      end: endDate + " " + endTime,
      length: hours,
    };

    try {
      // 약속 생성 API 호출
      const response = await POST("promises/promise/option/", promiseData);
      if (response.data.message) {
        alert(response.data.message); // 성공 메시지
        onSubmit(promiseData); // PromisePage의 handleCreatePromise 호출
      }
    } catch (error) {
      alert("약속 생성에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchFriendsList();  // 컴포넌트 마운트 시 친구 목록 불러오기
  }, []);

  useEffect(() => {
    setInputValue(friendSearch);
  }, [friendSearch]);

  return (
    <P.PromiseWrapper>
      <P.SubTitle>약속명</P.SubTitle>
      <P.BoldInputDiv>
        <input 
          className="textfield"
          type="text"
          defaultValue={promiseName}
          placeholder="약속명을 입력해주세요"
          onChange={(e) => (inputRef.current = e.target.value)} // 임시로 값 저장
          onBlur={handleBlur}
        />
      </P.BoldInputDiv>

      <P.SubTitle>참여자</P.SubTitle>
      <P.FriendInputWrapper>
        <P.OvalInput 
          placeholder="친구의 플랜팔 닉네임을 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt="searchicon" 
          onClick={fetchSearchFriends}
        />
      </P.FriendInputWrapper>

      {/* 검색 결과 표시 */}
      {searchError ? (
        <p>{searchError}</p>
      ) : (
        <P.MembersWrapper>
          {filteredFriends.map((friend) => (
            <P.MemberDiv key={friend.id} onClick={() => handleAddFriend(friend)}>
              {friend.nickname} 
              <P.PlusBtn>+</P.PlusBtn> 
            </P.MemberDiv>
          ))}
        </P.MembersWrapper>
      )}

      <P.MembersWrapper style={{marginTop: 5}}>
        {members.map((friend, index) => (
          <P.MemberDiv key={index}>{friend.nickname}</P.MemberDiv>
        ))}
      </P.MembersWrapper>

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
          className={hours === 0 ? "placeholder" : ""}
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

      <P.MakingWrapper>
        <P.MakingBtn onClick={handleSubmit}>
          약속 탐색하기
        </P.MakingBtn>
      </P.MakingWrapper>
      
      {/* 상태값 전달 */}
      <div style={{ display: 'none' }}>
        <PromiseTitle promiseName={promiseName} />
        <PromiseMember members={members.map((m) => m.nickname)} />
        <TimeSuggestion
          // colorIndex={0} 
          // isSelected={false} 
          // showVoteCount={true} 
          start={startDate + "T" + startTime}
          end={endDate + "T" + endTime}
          // time={{ start: startDate + "T" + startTime, end: endDate + "T" + endTime }}
          members={{ all: members.map((m) => m.nickname), voted: [] }}
          length={hours}
        />
      </div>
    </P.PromiseWrapper>
  );
}
