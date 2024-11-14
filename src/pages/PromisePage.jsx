import React, { useState } from "react";
import color from "styles/color";
import * as P from "components/promise/PromiseStyle";
import { POST, PUT } from "apis/api";
import PromiseItem from "components/promise/promise-main/PromiseItem";
import PromiseHeader from "components/promise/promise-main/PromiseHeader";
import PromiseBtn from "components/promise/promise-main/PromiseBtn";
import ModalBase from "components/modal/ModalBase";
import ExploreModal from "components/promise/promise-modal/ExploreModal";
import SuggestModal from "components/promise/promise-modal/SuggestModal";
import SelectModal from "components/promise/promise-modal/SelectModal";
import CompleteModal from "components/promise/promise-modal/CompleteModal";
import StatusModal from "components/promise/promise-modal/StatusModal";
import ItemModal from "components/promise/promise-modal/ItemModal";
import ModifyModal from "components/promise/promise-modal/ModifyModal";
import ShareModal from "components/promise/promise-modal/ShareModal";

export default function PromisePage({ username }) {
  const [currentModal, setCurrentModal] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [promiseId, setPromiseId] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  
  const closeModal = () => setCurrentModal(null);
  const openNextModal = (modalName) => setCurrentModal(modalName);

  const [promises, setPromises] = useState([]);
  const [promiseName, setPromiseName] = useState("");
  const [friendSearch, setFriendSearch] = useState("");
  const [members, setMembers] = useState([]);
  const [responseData, setResponseData] = useState([]);

  const calculateRemainingTime = () => {
    const elapsedTime = (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60); // 시간 단위로 변환
    return Math.max(0, 24 - Math.floor(elapsedTime));
  };

  // 약속 탐색 함수
  const handleCreatePromise = async (promiseData) => {
    try {
      const response = await POST("promises/promise/option/", promiseData);
      // Check if response.data and response.data.options are defined
      if (response.data && response.data.message) {
        setResponseData(response.data.result.promise_options);
        openNextModal("suggestModal"); 
      } else {
        console.warn("Expected data format not found in response:", response.data);
        alert("서버 응답이 올바르지 않습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("Error creating promise:", error);
      alert("약속 생성에 실패했습니다.");
    }
  };

  // 약속 확정 함수
  const handleConfirm = async () => {
    try {
      const selectedOption = responseData[selectedIndex];
      if (selectedOption) {
        const response = await PUT(`promises/promise/confirm/${promiseId}/${selectedOption.id}/`);
        if (response.data.message === "내 마음대로 확정하기에 성공하였습니다. 나의 일정에 약속이 추가되었습니다.") {
          // 약속 확정 후 새로운 약속을 promises 배열에 추가
          const newPromise = {
            id: response.data.result.id,
            title: promiseName,
            start: response.data.result.start,
            end: response.data.result.end,
            length: response.data.result.length,
            status: 'created', // 초기 상태 설정
            user: { id: username, nickname: "user" }, // 예시로 사용자 정보 설정
            members: members,
          };
          setPromises([...promises, newPromise]); // 새로운 약속 추가
          console.log("약속 시간이 확정되었습니다.");
        }
      } else {
        console.error("선택된 약속 시간이 없습니다.");
      }
    } catch (error) {
      console.error("확정 과정에서 오류가 발생했습니다.", error);
    }
  };

  // 약속 투표 함수
  const handleVotePromise = async () => {
    try {
      const username = localStorage.getItem("username");
      const promiseId = responseData.id; // 전체 약속의 ID
      const promiseOptionId = responseData.promise_options[selectedIndex].id; // 선택된 약속 옵션의 ID
  
      const url = `promises/promise/vote/${username}/${promiseId}/${promiseOptionId}`;
      const response = await PUT()
  
      if (response.status === 200) {
        console.log("투표가 성공적으로 등록되었습니다.");
        openNextModal("voteCompleteModal"); // 투표 완료 모달로 이동
      } else {
        console.error("투표 중 오류가 발생했습니다.", response);
      }
    } catch (error) {
      console.error("투표 요청 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <>
      <P.Wrapper>
        <PromiseHeader />
        <P.ItemWrapper>
          {promises.length > 0 ? (
            promises.map((promise) => (
              <PromiseItem 
                key={promise.id} 
                promiseId={promise.id} 
                username={username} />
            ))
          ) : (
            <P.Black23text 
            style={{color: color.primary_black, paddingTop: "70%"}}>현재 약속이 없습니다</P.Black23text>
          )}
        </P.ItemWrapper>
        <PromiseBtn onClick={() => openNextModal("exploreModal")} />
      </P.Wrapper>

      {/* 약속 세부정보 모달 */}
      {currentModal === "itemModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <ItemModal 
              openModifyModal={() => openNextModal("modifyModal")}
              onDeleteClick={closeModal} 
              openShareModal={() => openNextModal("shareModal")}
            />
          )}
          modalCategoryText="약속 정보"
          modalIntroduceText="약속 정보를 확인하세요."
          modalHeight="600px"
          tripleBtnText1="수정하기"
          tripleBtnText2="삭제하기"
          tripleBtnText3="공유하기"
          tripleBtnClickHandlers={[
            () => openNextModal("modifyModal"),  
            closeModal,                           
            () => openNextModal("shareModal"),    
          ]}
        />
      )}

      {/* 약속 수정 모달 */}
      {currentModal === "modifyModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={ModifyModal}
          modalCategoryText="약속 정보"
          modalIntroduceText="약속 정보를 수정하세요."
          modalHeight="600px"
          tripleBtnText1="저장하기"
        />
      )}

      {/* 약속 공유 모달 */}
      {currentModal === "shareModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={ShareModal}
          modalCategoryText="약속 공유"
          modalIntroduceText="여기톤 모여의 약속시간을"
          modalIntroduceText2="친구들과 공유해보세요"
          modalHeight="-420px"
      />
      )}

      {/* 약속시간 탐색 모달 */}
      {currentModal === "exploreModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <ExploreModal
              promiseName={promiseName}
              setPromiseName={setPromiseName}
              friendSearch={friendSearch}
              setFriendSearch={setFriendSearch}
              members={members}
              setMembers={setMembers}
              onSubmit={handleCreatePromise}
            />
          )}
          modalCategoryText="약속시간 탐색"
          modalIntroduceText="약속시간을 탐색해보세요"
          modalHeight="500px"
        />
      )}

      {/* 약속시간 제안 모달 */}
      {currentModal === "suggestModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <SuggestModal 
              promiseName={promiseName} 
              members={members}
              responseData={responseData}
            />
          )}
          modalCategoryText="약속시간 제안"
          modalIntroduceText="약속시간을 제안해드릴게요"
          modalHeight="600px"
          longSingleBtnText1="내 마음대로 확정하기"
          longSingleBtnText2="참여자 투표로 확정하기"
          onLongSingleBtnClick={() => openNextModal("confirmBySelfModal")}
          onLongSingleBtnClick2={() => openNextModal("confirmByVoteModal")}
        />
      )}

      {/* 내 마음대로 확정 모달 */}
      {currentModal === "confirmBySelfModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => 
          <>
            <SelectModal 
              promiseName={promiseName}
              members={members}
              responseData={responseData}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setSelectedOptionId={setSelectedOptionId}
              type="self" />
            <P.OnclickButton onClick={handleConfirm}>약속시간 확정하기</P.OnclickButton>
          </>}
          modalCategoryText="약속시간 제안"
          modalIntroduceText="약속시간을 제안해드릴게요"
          modalHeight="600px"
        />
      )}

      {/* 약속시간 투표 모달 */}
      {currentModal === "confirmByVoteModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => 
          <SelectModal 
              promiseName={promiseName}
              members={members}
              responseData={responseData}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setSelectedOptionId={setSelectedOptionId}
              onSubmit={handleVotePromise}
              type="vote" />}
          modalCategoryText="약속시간 투표"
          modalIntroduceText={`투표 종료까지 ${24-calculateRemainingTime()}시간 남았습니다`}
          modalHeight="600px"
          longSingleBtnText1="약속시간 투표하기"
          onLongSingleBtnClick={() => openNextModal("voteCompleteModal")}
        />
      )}

      {/* 투표 완료 모달 */}
      {currentModal === "voteCompleteModal" && (
        <ModalBase
          modalHeight="600px"
          setCloseModal={closeModal}
          InsideComponent={() => <CompleteModal/>}
          modalCategoryText="약속시간 투표"
          longSingleBtnText1="투표 현황 확인하기"
          onLongSingleBtnClick={() => openNextModal("voteStatusModal")}
        />
      )}

      {/* 투표 현황 모달 */}
      {currentModal === "voteStatusModal" && (
        <ModalBase
          modalHeight="600px"
          setCloseModal={closeModal}
          InsideComponent={() => 
          <StatusModal
            promiseName={promiseName}
            members={members}
            responseData={responseData}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            setSelectedOptionId={setSelectedOptionId}
          />}
          modalCategoryText="약속시간 투표 현황 "
        />
      )}
    </>
  );
}
