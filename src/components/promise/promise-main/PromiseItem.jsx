import React, { useState, useEffect } from "react";
import { PromiseItemBase } from "components/promise/promise-item/PromiseItemBase";
import starIconOff from "assets/promise/star-icon-off.svg";
import starIconOn from "assets/promise/star-icon-on.svg";
import { GET } from "apis/api"; 

const PromiseItem = ({ 
  promiseId,
  username,
  promiseName, 
  members, 
  responseData, 
  setResponseData,
  selectedIndex, 
  setSelectedIndex, 
  selectedOptionId,
  setSelectedOptionId
}) => {
  // const [responseData, setResponseData] = useState(responseData);

  // Fetch Promise Data
  const fetchPromiseData = async () => {
    if (promiseId) {  // 조건 강화
      try {
        const response = localStorage.getItem("promises");
        if (response.data) {
          setResponseData(response.data);
          localStorage.setItem("id", response.data.id);
        } else {
          console.warn("No data returned for promise.");
        }
      } catch (error) {
        console.error("Error fetching promise data:", error);
      }
    } else {
      console.error("Promise ID가 설정되지 않았습니다.");
    }
  };

  useEffect(() => {
    if (!responseData) {
      fetchPromiseData();  // responseData가 없을 때만 데이터 로드
    } else {
      setResponseData(responseData);  // responseData가 있으면 바로 사용
    }
  }, [responseData, promiseId]);

  return (
    responseData && (
      <PromiseItemBase
        title={responseData.title || "제목 없음"}  // 기본 제목을 추가할 수 있습니다.
        host={responseData.user ? responseData.user.nickname : "호스트 없음"}  // user 객체가 없을 경우 대체값
        count={responseData.members ? responseData.members.length : 0}  // members가 없으면 0으로 처리
        datetime={responseData.promise_options && responseData.promise_options.start ? responseData.promise_options.start : "시간 미정"}  // start 시간이 없을 경우 기본값
        memo={responseData.memos}  // 메모가 없을 경우 기본값
        
        iconSrc={{
          on: starIconOn,
          off: starIconOff,
        }}
        showShareButton={true} 
        showModifyButton={true}
        status={responseData.status}
      />
    )
  );
};

export default PromiseItem;
