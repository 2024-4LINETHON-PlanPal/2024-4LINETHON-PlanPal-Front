import React, { useEffect } from "react";
import { PromiseItemBase } from "components/promise/promise-main/PromiseItemBase";
import starIconOff from "assets/promise/star-icon-off.svg";
import starIconOn from "assets/promise/star-icon-on.svg";
import { GET } from "apis/api";

const PromiseItem = ({
  promiseId,
  username,
  promiseName,
  members,
  // datetime,
  status,
  memo,
}) => {
  // 약속 데이터를 불러오는 함수
  // const fetchPromiseData = async () => {
  //   if (promiseId) {
  //     try {
  //       const response = await GET(`promises/promise/${promiseId}/`);
  //       console.log("Promise 데이터 응답:", response);
  //       if (response) {
  //         setResponseData(response); // 데이터 상태 업데이트
  //       } else {
  //         console.warn("응답 데이터가 없습니다.");
  //       }
  //     } catch (error) {
  //       console.error("약속 데이터를 가져오는 중 오류 발생:", error);
  //     }
  //   } else {
  //     console.error("Promise ID가 설정되지 않았습니다.");
  //   }
  // };

  // useEffect(() => {
  //   fetchPromiseData();
  // }, [promiseId]); // promiseId가 변경될 때마다 데이터 로드

  return (
    <PromiseItemBase
      promiseId={promiseId}
      title={promiseName || "제목 없음"}
      host={username || "호스트 없음"}
      count={members?.length || 0}
      // datetime={datetime || "시간 정보 없음"}
      memo={memo || "메모 없음"}
      iconSrc={{
        on: starIconOn,
        off: starIconOff,
      }}
      showShareButton={true}
      showModifyButton={true}
      status={status || "상태 정보 없음"}
    />
  );
};

export default PromiseItem;
